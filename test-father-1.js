var child = require('child_process').fork('child-1.js');
var app = require('http').createServer(onRequest);
var io  = require('socket.io')(app);
app.listen(80);

child.send('server', io);

io.on('connection', function(socket){
    console.log('connect complete in parent process, process id: ' + process.pid);
    socket.emit('parent connect complete', {});
});

function onRequest(req, res) {
    res.write(200, {'Content-Type' : 'text/plain'});
    res.end('Hello World\n');  
}

