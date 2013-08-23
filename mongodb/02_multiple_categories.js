var CATEGORIES = [ "BK", "EL", "SH"];
var N = 10;

var insertData = function() {
	db.orders.insert( {cid: CATEGORIES[ Math.floor(3 * Math.random()) ] } ); 
}

for ( var i=0; i<N; i++ ) {
	insertData();
}
