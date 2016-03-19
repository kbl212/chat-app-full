var express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server);

var port = 3000 || process.env.PORT;
server.listen(3000);

app.use(express.static(__dirname + '/public'));
/*
app.get('/', function(req,res) {
    res.sendfile(__dirname + '/index.html'); //maybe change this to app.use(express...etc);
})
*/

io.sockets.on('connection', function(socket) {
    socket.on('send message', function(data) {
        io.sockets.emit('new message', data);
        //sockets.broadcast.emit('new message', data);
        //sockets.broadcast.emit, sends to everyone EXCEPT me...
    })
})