const assert = require('assert');
const calculateNumber = require('./2-calcul_chai');
const chai = require('chai');

describe('test calculateNumber', () => {

  it('test suite for type=SUM', () => {
    chai.expect(calculateNumber('SUM', 2.0, 2.0)).to.equal(4)
    chai.expect(calculateNumber('SUM', 2.3, 1.8)).to.equal(4)
    chai.expect(calculateNumber('SUM', -2.0, -2.0)).to.equal(-4)
    chai.expect(calculateNumber('SUM', -2.3, -1.8)).to.equal(-4);
    chai.expect(calculateNumber('SUM', 2.0, -2.0)).to.equal(0);
    chai.expect(calculateNumber('SUM', 0.0, 0.0)).to.equal(0);
  });

  it('test suite for type=SUBTRACT', () => {
    chai.expect(calculateNumber('SUBTRACT', 2.0, 2.0)).to.equal(0);
    chai.expect(calculateNumber('SUBTRACT', 2.3, 1.8)).to.equal(0);
    chai.expect(calculateNumber('SUBTRACT', -2.0, -2.0)).to.equal(0);
    chai.expect(calculateNumber('SUBTRACT', -2.3, -1.8)).to.equal(0);
    chai.expect(calculateNumber('SUBTRACT', -2.0, 2.0)).to.equal(-4.0);
    chai.expect(calculateNumber('SUBTRACT', 2.0, -2.0)).to.equal(4.0);
    chai.expect(calculateNumber('SUBTRACT', 0.0, 0.0)).to.equal(0);
  });

  it('test suite for type=DIVIDE', () => {
    chai.expect(calculateNumber('DIVIDE', 8.0, 2.0)).to.equal(4.0);
    chai.expect(calculateNumber('DIVIDE', -7.0, 2.0)).to.equal(-3.5);
    chai.expect(calculateNumber('DIVIDE', 7.0, -2.0)).to.equal(-3.5);
    chai.expect(calculateNumber('DIVIDE', -7.0, -2.0)).to.equal(3.5);
    chai.expect(calculateNumber('DIVIDE', 2.0, 2.0)).to.equal(1);
    chai.expect(calculateNumber('DIVIDE', -2.0, -2.0)).to.equal(1);
    chai.expect(calculateNumber('DIVIDE', 2.6, 3.0)).to.equal(1);
    chai.expect(calculateNumber('DIVIDE', 2.4, 2.0)).to.equal(1);
    chai.expect(calculateNumber('DIVIDE', 0.0, 5.0)).to.equal(0);
    chai.expect(calculateNumber('DIVIDE', 0.0, -5.0)).to.equal(-0);
  });

  it('test suite for type=DIVIDE', () => {
    let num1 = 1.2;
    let num2 = 0.2;
    const result = calculateNumber('DIVIDE', num1, num2);
    chai.expect(result).to.equal('Error');
    chai.expect(result).to.not.be.empty;
  });
});
