let app = require('express')();
let http = require('http').createServer(app);
let io = require('socket.io')(http);
let mysql = require('mysql');
let users = new Array();
let sockets = new Array();
let db = mysql.createConnection({
    host: 'localhost', //Datenbankverbindung verändern
    user: 'reactable',
    password: 'passme01',
    database: 'reactable'
})

db.connect(function(err) {
    if (err) console.log(err)
})

http.listen(3000, function() {
    console.log('listening on localhost:3000');
});

io.on('connection', function(socket) {
    console.log('a user connected');

    if (socket.handshake.query.room != "") {
        socket.join(socket.handshake.query.room);
        io.to(socket.handshake.query.room).emit('connectedToRoom', 'You are in ' + socket.handshake.query.room);
    }

    socket.on('invite Gamer', function(usr) {
        console.log('Invited User: ' + usr);
        socket.broadcast.emit('invitePlayer', usr);
    })

    socket.on('join Room', function(roomName) {
        socket.join(roomName);
        io.to(roomName).emit('connectedToRoom', 'You are in ' + roomName);
    })

    socket.on('login', function(usr) {
        console.log('User: ' + usr.username);
        users.push(usr);
        sockets.push(socket);

        let sql = "select id, password from player where username = '" + usr.username + "'";

        db.query(sql, function(err, result) {
            //if (err) socket.emit('returnLogin', 'error, not found');
            if (err) console.log(err);

            if (result[0].password == usr.password) {
                socket.emit('returnLogin', result[0].id);
            } else {
                socket.emit('returnLogin', 'error');
            }
        });
    })

    socket.on("register", function(usr) {
        let sql = "insert into player (username, email, password) values ('" + usr.username + "', '" + usr.email + "', '" + usr.password + "');";

        db.query(sql, function(err, result) {
            if (err) socket.emit('returnRegister', 'error');

            console.log("1 person inserted");

            socket.emit('returnRegister', 'got Registered');
        });
    })

    socket.on('gameStart', function(gamestart) {
        let sql = "insert into game (createtime, userid, modellid) values (NOW(), " + gamestart.userId + ", " + gamestart.modellId + ");";

        console.log(sql)

        db.query(sql, function(err, result) {
            //if (err) socket.emit('returnGameStart', 'error');
            if (err) console.log(err);

            console.log("Gamestart inserted");

            socket.emit('returnGamestart', 'Timer started');
        });
    })

    socket.on('gameFinished', function(gameEnd) {
        //userid ermitteln
        let select = 'select (UNIX_TIMESTAMP() - UNIX_TIMESTAMP(createtime)) "time" from game where userId = ' + gameEnd.userId;

        db.query(select, function(err, result) {
            if (err) socket.emit('returnGameFinished', 'error');

            console.log(result[0].time);

            let insert = "update game set time = '" + result[0].time + "' where userId = " + gameEnd.userId;

            db.query(insert, function(err, res) {
                if (err) socket.emit('returnGameFinished', 'error insert');

                console.log("time inserted");

                socket.emit('returnGameFinished', result[0].time);
            })
        });
    })

    socket.on('updateUser', function(user) {
        let select = 'select password from player where userId = ' + user.userId + '';

        db.query(select, function(err, result) {
            if (err) throw socket.emit('returnUpdatedUser', 'error');

            let insert = "update player set password = '" + user.password + "' where userId = " + user.userId;

            db.query(insert, function(err, result) {
                if (err) throw socket.emit('returnUpdatedUser', 'error updated');

                socket.emit('returnUpdatedUser', 'updated');
            })
        })
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