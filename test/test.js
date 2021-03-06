/* global require, describe, it */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	isLessThan = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'validate.io-less-than', function tests() {

	it( 'should export a function', function test() {
		expect( isLessThan ).to.be.a( 'function' );
	});

	it( 'should positively validate', function test() {
		assert.ok( isLessThan( 1, 2 ) );
	});

	it( 'should negatively validate', function test() {
		var values = [
			2,
			true,
			[],
			'5',
			function(){},
			null,
			NaN,
			{'foo':'bar'},
			undefined
		];

		for ( var i = 0; i < values.length; i++ ) {
			assert.ok( !isLessThan( values[i], 1 ) );
			assert.ok( !isLessThan( 10, values[i] ) );
		}
	});

});
