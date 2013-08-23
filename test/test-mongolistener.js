var mongoListener = require('../mongolistener.js');

var onDocument = function(document) {
	console.info(document);
}

mongoListener.init(
		'localhost', 27017,
		'test', 'clicks', 
		{'_id':0, 'foo': 1}, onDocument);


