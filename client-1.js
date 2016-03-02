var url        = 'http://localhost';
var rootSocket = io.connect(url);

rootSocket.on('child connect complete', function (params) {    
    console.log('child connect complete');
});

rootSocket.on('parent connect complete', function (params) {
    console.log('parent connect complete');
});