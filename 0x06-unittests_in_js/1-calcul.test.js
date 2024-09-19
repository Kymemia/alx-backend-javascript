const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function () {
  describe('SUM peration', function () {
    it('should return 10 for SUM of 4.4 and 6.4', function () {
      assert.strictEqual(calculateNumber('SUM', 4.4, 6.4), 10);
    });
    it('should return 12 for SUM of 3.45 and 8.89', function () {
      assert.strictEqual(calculateNumber('SUM', 3.45, 8.89), 12);
    });
    it('should return 13 for SUM of 5.55 and 6.77', function () {
      assert.strictEqual(calculateNumber('SUM', 5.55, 6.77), 13);
    });
  });

  describe('SUBTRACT operation', function () {
    it('should return -2 for SUBTRACT of 4.4 and 6.4', function () {
      assert.strictEqual(calculateNumber('SUBTRACT', 4.4, 6.4), -2);
    });
    it('should return 6 for SUBTRACT of 8.89 and 3.45', function () {
		       assert.strictEqual(calculateNumber('SUBTRACT', 8.89, 3.45), 6);
	       });
    it('should return 1 for SUBTRACT of 6.77 and 5.55', function () {
      assert.strictEqual(calculateNumber('SUBTRACT', 6.77, 5.55), 1);
    });
  });

  describe('DIVIDE operation', function () {
    it('should return 3 for DIVIDE of 9.3 and 3.0', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 9.3, 3.0), 3);
    });
    it('should return 3 for DIVIDE of 8.89 and 3.45', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 8.89, 3.45), 3);
    });
    it('should return 2 for DIVIDE of 4.4 and 2.2', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 4.4, 2.2), 2);
    });
    it('should return "Error" for DIVIDE of 4 and 0', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 4, 0), 'Error');
    });
    it('should return "Error" for DIVIDE of 3 and 0', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 3, 0), 'Error');
    });
  });

  describe('Invalid operation', function () {
    it('should throw an error for invalid type "MULTIPLY"', function () {
      assert.throws(() => calculateNumber('MULTIPLY', 6, 5), /Invalid type/);
    });
  });
});
