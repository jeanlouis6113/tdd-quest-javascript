// capitalizeFirstLetters.js




const assert = require('assert');
const capitalizeFirstLetters = require('../capitalizeFirstLetters');

describe('capitalizeFirstLetters', () => {
  it('is a function that accepts one argument', () => {
    assert.strictEqual(typeof capitalizeFirstLetters, 'function');
    assert.strictEqual(capitalizeFirstLetters.length, 1);
  });
  it('transforms javaScript correctly', () => {
    assert.strictEqual(capitalizeFirstLetters('javaScript'), 'JavaScript');
  });
  it('works for a 1-character string', () => {
    assert.strictEqual(capitalizeFirstLetters('z'), 'Z');
  });
  it(' works for a multi-word string', () => {
    assert.strictEqual(capitalizeFirstLetters('hello world'), 'Hello World');
  });
  it('works for an empty string', () => {
    assert.strictEqual(capitalizeFirstLetters(''), '');
  });
});

module.exports = capitalizeFirstLetters;
