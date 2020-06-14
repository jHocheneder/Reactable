let app = require('express')();
let http = require('http').createServer(app);
let io = require('socket.io')(http);
let mysql = require('mysql');
let users = new Array();
let sockets = new Array();
let db = mysql.createConnection({
    host: 'localhost', //Datenbankverbindung verändern
    user: 'root',
    password: 'password',
    database: 'reactable'
})

db.connect(function(err) {
    if (err) console.log(err)
})

http.listen(8080, function() {
    console.log('listening on localhost:3000');
});

io.on('connection', function(socket) {
    console.log('a user connected');

    socket.on('login', function(usr) {
        console.log('User: ' + usr.username);
        sockets[usr.username] = socket;

        let sql = "select id, password from player where username = '" + usr.username + "'";

        db.query(sql, function(err, result) {
            if (err) throw err;

            if (result[0] != null) {
                if (result[0].password == usr.password) {
                    socket.emit('returnLogin', result[0].id);
                } else {
                    socket.emit('returnLogin', 'error');
                }
            }
        });
    })

    socket.on('register', function(usr) {
        let sql = "insert into player (username, email, password) values ('" + usr.username + "', '" + usr.email + "', '" + usr.password + "');";

        db.query(sql, function(err, result) {
            if (err) socket.emit('returnRegister', 'error');

            let sql = "select id from player where username = '" + usr.username + "'";

            db.query(sql, function(err, result) {
                if (err) throw err;

                if (result[0] != null) {
                    socket.emit('returnRegister', result[0].id);
                }
            });
        });
    })

    socket.on('gameStart', function(gamestart) {
        let select = "select time from game where userId = " + gamestart.userId;
        let insert = "insert into game (createtime, userid, modellid) values (NOW(), " + gamestart.userId + ", " + gamestart.modellId + ");";
        let deleteEntry = "delete from game where userId = " + gamestart.userId + " and time is NULL";

        if (gamestart.userId != null) {
            db.query(select, function(err, result) {
                if (err) throw err;

                if (result[0] == null) {

                    db.query(insert, function(err, result) {
                        if (err) throw err;

                        socket.emit('returnGamestart', 'Timer started');
                    });
                } else {
                    db.query(deleteEntry, function(err, result) {
                        if (err) throw err;

                        db.query(insert, function(err, result) {
                            if (err) throw err;

                            socket.emit('returnGamestart', 'Timer started');
                        });
                    })
                }
            })
        }
    })

    socket.on('gameFinished', function(gameEnd) {
        let select = 'select (UNIX_TIMESTAMP() - UNIX_TIMESTAMP(createtime)) "time" from game where userId = ' + gameEnd.userId + ' and time is null';

        db.query(select, function(err, result) {
            if (err) socket.emit('returnGameFinished', 'error');

            let insert = "update game set time = '" + result[0].time + "' where userId = " + gameEnd.userId;

            db.query(insert, function(err, res) {
                if (err) socket.emit('returnGameFinished', 'error insert');

                socket.emit('returnGameFinished', result[0].time);
            })
        });
    })

    socket.on('updateUser', function(user) {
        let select = 'select password from player where id = ' + user.userId;

        console.log(select);

        db.query(select, function(err, result) {
            if (err) throw err;

            let insert = "update player set password = '" + user.password + "', username = '" + user.username + "' where id = " + user.userId;

            db.query(insert, function(err, result) {
                if (err) throw err;

                socket.emit('returnUpdatedUser', 'updated');
            })
        })
    })

    socket.on('searchOpponent', function(user) {
        let select = "select username from player where lower(username) like lower('" + user.search + "%')"
        let users = [];
        let i;

        db.query(select, function(err, result) {
            if (err) throw err;

            for (i = 0; i < result.length; i++) {
                users.push(result[i].username)
            }

            if (i == result.length) {
                socket.emit('returnFoundOpponent', users);
            }
        })
    })

    socket.on('invitePlayer', function(users) {
        let select = "select id from player where username = '" + users.usernameOpponent + "'";

        db.query(select, function(err, result) {
            if (err) throw err;

            let opponentId = result[0].id;

            select = "select id from multiplayer where player1 = " + users.id + " and player2 = " + opponentId + " and time is null";

            db.query(select, function(err, result) {
                if (err) throw err;

                if (result[0] != null) {
                    let del = "delete from multiplayer where player1 = " + users.id + " and player2 = " + opponentId;

                    db.query(del, function(err, result) {
                        if (err) throw err;
                    })
                }

                let insert = "insert into multiplayer (player1, player2, modelid) values (" + users.id + ", " + opponentId + ", " + users.modelid + ");"

                db.query(insert, function(err, result) {
                    if (err) throw err;

                    socket.join(users.room);

                    let msg = {
                        username: users.username,
                        room: users.room
                    }

                    socket.broadcast.to(sockets[users.usernameOpponent].id).emit('returnInvitation', msg);
                })
            })
        })
    })

    socket.on('connectGame', function(room) {
        socket.join(room);

        setTimeout(function() { io.in(room).emit('countdown', '3') }, 5000);
        setTimeout(function() { io.in(room).emit('countdown', '2') }, 6000);
        setTimeout(function() { io.in(room).emit('countdown', '1') }, 7000);
        setTimeout(function() { io.in(room).emit('countdown', 'Go') }, 8000);
    })

    socket.on('disconnect', function() {
        console.log('user disconnected');

        users.splice(sockets.indexOf(socket), 1);
        sockets.splice(sockets.indexOf(socket), 1);
        users.forEach(element => {
            console.log(element);
        });

        socket.broadcast.emit('disconnectGamer', users);
    })
});