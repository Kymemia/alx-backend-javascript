const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function () {
  it('should return the sum of rounded numbers', function () {
    assert.strictEqual(calculateNumber(4.4, 6.4), 10);
    assert.strictEqual(calculateNumber(7.7, 3.4), 11);
    assert.strictEqual(calculateNumber(-4.4, -6.4), -10);
    assert.strictEqual(calculateNumber(-7.7, -3.4), -11);
    assert.strictEqual(calculateNumber(0, 0), 0);
    assert.strictEqual(calculateNumber(3.45, 8.89), 12);
    assert.strictEqual(calculateNumber(5.55, 6.77), 13);
  });
});
