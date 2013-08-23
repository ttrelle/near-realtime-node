var mongoListener = require('../mongolistener.js');
var agg = require('../aggregator.js')

var onDocument = function(document) {
	console.info(document);
	agg.addData(document);
	var a  = agg.aggregate();
	console.info( a );
}

mongoListener.init(
		'localhost', 27017,
		'test', 'orders', 
		null, onDocument);

// {'_id':0, 'foo': 1}
