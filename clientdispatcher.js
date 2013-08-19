var async = require('async');

var clients = [];

exports.init = function(httpd) {
	var io = require('socket.io').listen(httpd);
	
	io.sockets.on('connection', function(socket) {
		clients.push(socket);
		console.log( "Client connected: " + socket );
	});
	
	io.sockets.on('disconnect', function(socket) {
		clients.pull( clients.indexOf(socket) );
		console.log( "Client disconnected: " + socket );
	});

};

exports.emit = function(data) {
	async.forEach( clients, function(socket, callback) {
		socket.emit('JSON', data);
		callback();
	});
};