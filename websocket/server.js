let app = require('express')();
let http = require('http').createServer(app);
let io = require('socket.io')(http);
let users = new Array();
let sockets = new Array();

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