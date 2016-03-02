process.on('message', function(messageName, data) {
    
    if ('server' === messageName) {
        var io = data;
        io.on('connection', function(socket){
            console.log('connect complete in child process, process id: ' + process.pid);
            socket.emit('child connect complete', {});
        });
    }
    
});