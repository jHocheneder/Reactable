let app = require('express')();
let http = require('http').createServer(app);
let io = require('socket.io')(http);
let fs = require('fs');
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

//let obj=[];

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

http.listen(3000, function() {
    console.log('listening on localhost:3000');
});

io.on('connection', function(socket) {
    console.log('a user connected');

    if (socket.handshake.query.room != "") {
        socket.join(socket.handshake.query.room);
        io.to(socket.handshake.query.room).emit('connectedToRoom', 'You are in ' + socket.handshake.query.room);
    }

    socket.on('user login', function(usr) {
        console.log('User: ' + usr);
        users.push(usr);
        sockets.push(socket);
        socket.emit('returnLogin', users);
        socket.broadcast.emit('connectGamer', users);
    })

    socket.on('invite Gamer', function(usr) {
        console.log('Invited User: ' + usr);
        socket.broadcast.emit('invitePlayer', usr);
    })

    socket.on('join Room', function(roomName) {
        socket.join(roomName);
        io.to(roomName).emit('connectedToRoom', 'You are in ' + roomName);
    })

    socket.on("insert", function(usr) {
        //let usr = JSON.parse(user);
        let sql = "insert into player (vName, nName, username) values ('" + usr.vName + "', '" + usr.nName + "', '" + usr.username + "');";

        db.query(sql, function(err, result) {
            if (err) console.log(err);
            console.log("1 record inserted");
        });

        /*fs.readFile('list.json', 'utf8', function readFileCallback(err, data){
            if (err){
                console.log(err);
            } else {
            //obj = JSON.parse(data); //now it an object
            obj.push(usr); //add some data
            json = JSON.stringify(obj, null, 2); //convert it back to json
            fs.writeFile("list.json", json, function(err) {
                if(err) {
                    return console.log(err);
                }
                console.log("The file was saved!");
            }); 
        }});*/
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