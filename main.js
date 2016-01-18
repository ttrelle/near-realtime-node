var static = require('node-static');
var OplogWatcher = require('mongo-oplog-watcher');
var webfolder = new static.Server('./web');

var aggregator = require('./aggregator.js');
var dispatcher = require('./dispatcher.js');

// event handler for incoming data
var processData = function(document) {
	console.info(document);
	console.info("#" + aggregator.count());
	
	if ( document.cid == "CLEAR" ) {
		aggregator.reset();
	} else {
		aggregator.addData(document);
	}
	
	// TODO push to clients only every x milliseconds
	dispatcher.emit( aggregator.aggregate() );
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
dispatcher.init(httpd, 'order_aggregates');

// init MongoDB listener
var oplog = new OplogWatcher({
  host:"127.0.0.1" 
  ,ns: "test.orders"
});
oplog.on('insert', function(data) {
	console.info(data);
	processData(data);
});


