var http = require('http');
var socketio = require('socket.io');
var fs = require('fs');

var handler = function(req, res){
    fs.readFile(__dirname + '/index.html', function(err, data){
        if(err){
            res.writeHead(500);
            return res.end('Error loading index.html');
        }else{
            res.writeHead(200);
            res.end(data);
        }
    });
};

var app = http.createServer(handler);
var io = socketio.listen(app);

// use this for Cloud9
io.configure(function(){
    io.set('transport', ['xhr-polling']);
});

io.sockets.on('connection', function(socket){
    setInterval(function(){
        var timeStamp = Date.now();
        console.log("Emitted: " + timeStamp);
        socket.emit('timer', timeStamp);
    }, 2000);

    socket.on('submit', function(data){
        console.log('Submitted: ' + data);
    });
});

var PORT = 7777;
app.listen(PORT);

console.log('Server running on port: ' + PORT);