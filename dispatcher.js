/*
   This websocket based dispatcher pushes the data to all
   connected clients.  

   Author: Tobias Trelle <tobias.trelle@codecentric.de>
*/

var async = require('async');

var clients = [];
var data_key;

// init websocket listener
exports.init = function(httpd, key) {
	var io = require('socket.io').listen(httpd);
	io.set('log level', 1);	

	data_key = key;

	io.sockets.on('connection', function(socket) {
		clients.push(socket);
		console.log( "Client connected: " + socket );
	});
	
	io.sockets.on('disconnect', function(socket) {
		clients.pull( clients.indexOf(socket) );
		console.log( "Client disconnected: " + socket );
	});

};

// emit a single JSON document to all clients
exports.emit = function(data) {
	if ( clients.length > 0 ) {
		console.info("Starting push to clients ...");
		async.eachSeries( 
			clients, 
			function(socket, callback) {
				socket.emit(data_key, data);
				callback();
			},
			function(err) {
				console.info(err);
			}
		);
	}
};
