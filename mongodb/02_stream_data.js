var CATEGORIES = [ "BK", "EL", "SH"];
var N = 100000000000;

var rnd = function(upper) {
	return Math.floor(upper * Math.random());
}

var insertData = function(n) {
	for (var i=0; i<n; i++) {
		db.orders.insert( {cid: CATEGORIES[ rnd(CATEGORIES.length) ] } );
	} 
}

for ( var i=0; i<N; i++ ) {
	insertData( rnd(5) );
	sleep( 1000 + rnd(1000) );
}
