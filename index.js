var express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server);

server.listen(3000);

app.use(express.static(__dirname + '/public'));
/*
app.get('/', function(req,res) {
    res.sendfile(__dirname + '/index.html'); //maybe change this to app.use(express...etc);
})
*/