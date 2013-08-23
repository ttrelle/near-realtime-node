var mongo = require('mongodb');

exports.init = function(host, port, dbName, collectionName, projection, documentCallback) {
	var 
		mongod = new mongo.Server(host, port, {journal:true, safe:false}),
		db = new mongo.Db(dbName, mongod);
	
	db.open( function(err) {
		handleErr(err);
		
		db.collection(collectionName, function(err,collection) {
			handleErr(err);
			
			cursor = collection.find(
					{}, 
					projection == null ? {}: projection, 
					TAIL_OPTIONS
			);
			
			var stream = cursor.stream();
			stream.on('data', documentCallback);
			stream.on('close', function() {
				db.close();
			});
			
		}); // collection
	}); // open
}

var TAIL_OPTIONS = {'tailable': 1, 'awaitdata': 1, 'sort': {'$natural': 1} };

var handleErr = function(err) {
	if (err) {
		console.warn(err.message);
		process.exit(1);
	}
}
