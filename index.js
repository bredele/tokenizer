
/**
 * String tokenizer.
 *
 * @param {String} test
 * @return {Array}
 */

module.exports = function(text) {
  return text.split(/\W+/);
};