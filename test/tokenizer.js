
/**
 * Test dependecies.
 */

var assert = require('assert');
var tokenizer = require('..');


describe('basic', function() {

	it('split words', function() {
		assert.deepEqual(tokenizer('it is beauty'), ['it', 'is', 'beauty']);
	});
	
});