
const assert = require('assert');
const Rectangle = require('../rectangle');

describe('Rectangle', () => {

  const rectOne = new Rectangle(4, 4);
  const rectTwo = new Rectangle(4, 10);
  const rectThree = new Rectangle(13, 7);

  it('isSquare', function () {

    assert.strictEqual(rectOne.isSquare(), true);
    assert.strictEqual(rectTwo.isSquare(), false);
  })
  it('getarea',() => {
    assert.strictEqual(rectThree.getArea(), 91);
  })
  it('getPerimeter',() => {
    assert.strictEqual(rectThree.getPerimeter(), 40);
  })
});