describe('calculateNumber', function () {
  let expect;
  let calculateNumber;

  before(async function () {
    const chai = await import('chai');
    expect = chai.expect;

    const module = await import('./2-calcul_chai.js');
    calculateNumber = module.default;
  });

  describe('calculateNumber', function () {
    describe('SUM peration', function () {
      it('should return 10 for SUM of 4.4 and 6.4', function () {
        expect(calculateNumber('SUM', 4.4, 6.4)).to.equal(10);
      });
      it('should return 12 for SUM of 3.45 and 8.89', function () {
        expect(calculateNumber('SUM', 3.45, 8.89)).to.equal(12);
      });
      it('should return 13 for SUM of 5.55 and 6.77', function () {
        expect(calculateNumber('SUM', 5.55, 6.77)).to.equal(13);
      });
    });

    describe('SUBTRACT operation', function () {
      it('should return -2 for SUBTRACT of 4.4 and 6.4', function () {
        expect(calculateNumber('SUBTRACT', 4.4, 6.4)).to.equal(-2);
      });
      it('should return 6 for SUBTRACT of 8.89 and 3.45', function () {
		       expect(calculateNumber('SUBTRACT', 8.89, 3.45)).to.equal(6);
      });
      it('should return 1 for SUBTRACT of 6.77 and 5.55', function () {
        expect(calculateNumber('SUBTRACT', 6.77, 5.55)).to.equal(1);
      });
    });

    describe('DIVIDE operation', function () {
      it('should return 3 for DIVIDE of 9.3 and 3.0', function () {
        expect(calculateNumber('DIVIDE', 9.3, 3.0)).to.equal(3);
      });
      it('should return 3 for DIVIDE of 8.89 and 3.45', function () {
        expect(calculateNumber('DIVIDE', 8.89, 3.45)).to.equal(3);
      });
      it('should return 2 for DIVIDE of 4.4 and 2.2', function () {
        expect(calculateNumber('DIVIDE', 4.4, 2.2)).to.equal(2);
      });
      it('should return "Error" for DIVIDE of 4 and 0', function () {
        expect(calculateNumber('DIVIDE', 4, 0)).to.equal('Error');
      });
      it('should return "Error" for DIVIDE of 3 and 0', function () {
        expect(calculateNumber('DIVIDE', 3, 0)).to.equal('Error');
      });
    });

    describe('Invalid operation', function () {
      it('should throw an error for invalid type "MULTIPLY"', function () {
        expect(() => calculateNumber('MULTIPLY', 6, 5)).to.throw(/Invalid type/);
      });
    });
  });
});
