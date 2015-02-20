'use strict';

var isLessThan = require( './../lib' );

console.log( isLessThan( 1, 2 ) );
// returns true

console.log( isLessThan( 1, 0 ) );
// returns false