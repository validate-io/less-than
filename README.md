Less than
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Validates if a value is less than a comparator value.


## Installation

``` bash
$ npm install validate.io-less-than
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

``` javascript
var isLessThan = require( 'validate.io-less-than' );
```

#### isLessThan( value, comparator )

Validates if a `value` is less than a `comparator` value.

``` javascript
var a = 1,
	b = 2;

var bool = isLessThan( a, b );
// returns true
```

__Note__: this method validates that both `arguments` are `numeric` before making a comparison. For non-numeric arguments, the method returns `false`.


## Examples

``` javascript
console.log( isLessThan( 1, 2 ) );
// returns true

console.log( isLessThan( 1, 0 ) );
// returns false
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT). 


## Copyright

Copyright &copy; 2014. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/validate.io-less-than.svg
[npm-url]: https://npmjs.org/package/validate.io-less-than

[travis-image]: http://img.shields.io/travis/validate-io/less-than/master.svg
[travis-url]: https://travis-ci.org/validate-io/less-than

[coveralls-image]: https://img.shields.io/coveralls/validate-io/less-than/master.svg
[coveralls-url]: https://coveralls.io/r/validate-io/less-than?branch=master

[dependencies-image]: http://img.shields.io/david/validate-io/less-than.svg
[dependencies-url]: https://david-dm.org/validate-io/less-than

[dev-dependencies-image]: http://img.shields.io/david/dev/validate-io/less-than.svg
[dev-dependencies-url]: https://david-dm.org/dev/validate-io/less-than

[github-issues-image]: http://img.shields.io/github/issues/validate-io/less-than.svg
[github-issues-url]: https://github.com/validate-io/less-than/issues
