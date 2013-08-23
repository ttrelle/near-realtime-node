var agg = require('../aggregator.js');

exports.should_be_empty = function(test) {
	// when
	var doc = agg.aggregate(); 
	
	// then
	test.deepEqual( {}, doc);

	test.done();
}

exports.should_aggregate = function(test) {
	// given
	agg.addData({cid: "A"});
	agg.addData({cid: "A"});
	agg.addData({cid: "B"});
	agg.addData({id: "A"});

	// when
	var doc = agg.aggregate(); 
	
	// then
	test.equal( 2, doc.A );
	test.equal( 1, doc.B );

	test.done();
}

exports.should_reset = function(test) {
	// given
	agg.addData({cid: "A"});
	agg.addData({cid: "A"});
	agg.addData({cid: "B"});
	agg.addData({id: "A"});

	// when
	agg.reset();
	var doc = agg.aggregate(); 

	// then
	test.deepEqual( {}, doc);
	
	test.done();
}