var CATEGORIES = [ "BK", "EL", "SH"];
var N = 1000;

var insertData = function() {
	db.orders.insert( {cid: CATEGORIES[2] } ); 
}

for ( var i=0; i<N; i++ ) {
	insertData();
}
