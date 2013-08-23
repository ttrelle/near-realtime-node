/*
   This simple aggregator counts the absolute occurences of the values of 
   certain attribute (cid) in a given JSON document.

   Author: Tobias Trelle <tobias.trelle@codecentric.de>
*/

var categoryCounter = {};

exports.addData = function( document ) {
	cat = document.cid;
	if ( cat ) {
		catCount = categoryCounter[cat];
		
		if (catCount) {
			categoryCounter[cat]++;
		} else {
			categoryCounter[cat] = 1;
		}
	}
	
};

exports.aggregate = function() {
	return categoryCounter;
}

exports.reset = function() {
	categoryCounter = {};
}


