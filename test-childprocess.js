var fork = require('child_process').fork;
var cpus = require('os').cpus();

console.log('cpu num: ' + cpus.length);

for (var i = 0; i < cpus.length; ++i) {
	fork('./worker.js');
}