const assert = require('assert');
const calculateNumber = require('./1-calcul');
const chai = require('chai');

describe('test calculateNumber', () => {

  it('test suite for type=SUM', () => {
    let num1 = 1.2;
    let num2 = 2.2;
    const result = calculateNumber('SUM', num1, num2);
    chai.expect(result).to.not.equal(num1 * num2)
    chai.expect(result).to.not.equal(num1 - num2)
    chai.expect(result).to.not.equal(num1 / num2)
  });

  it('test suite for type=SUBTRACT', () => {
    let num1 = 1.2;
    let num2 = 2.2;
    const result = calculateNumber('SUBTRACT', num1, num2);
    chai.expect(result).to.not.equal(num1 + num2)
    chai.expect(result).to.not.equal(num1 * num2)
    chai.expect(result).to.not.equal(num1 / num2)
  });

  it('test suite for type=DIVIDE', () => {
    let num1 = 1.2;
    let num2 = 2.2;
    const result = calculateNumber('DIVIDE', num1, num2);
    chai.expect(result).to.not.equal(num1 + num2)
    chai.expect(result).to.not.equal(num1 * num2)
    chai.expect(result).to.not.equal(num1 - num2)
  });

  it('test suite for type=DIVIDE', () => {
    let num1 = 1.2;
    let num2 = 0.2;
    const result = calculateNumber('DIVIDE', num1, num2);
    chai.expect(result).to.equal('Error');
    chai.expect(result).to.not.be.empty;
  });
});
