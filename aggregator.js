var categoryCounter = {};
var _count = 0;

exports.addData = function( document ) {
	_count++;
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

exports.count = function() {
	return _count;
}


