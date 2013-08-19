var static = require('node-static');
var webfolder = new static.Server('./web');

var eventListener = require('./mongolistener.js');
var aggregator = require('./dataaggregator.js');
var dispatcher = require('./clientdispatcher.js');

// event handler for incoming data
var processData = function(document) {
	aggregator.addData(document);
	dispatcher.emit( aggregator.getAggreate() );
};

// init HTTP demon
var httpd = require('http').createServer(function(req,res) {
	req.addListener('end', function() {
		webfolder.serve(req,res);
	}
	).resume();
}
);
httpd.listen(8080);

// init client dispatcher
dispatcher.init(httpd);

// init MongoDB listener
eventListener.init('localhost', 27017, 'test', 'clicks', null, processData);

