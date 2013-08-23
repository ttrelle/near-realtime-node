
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


