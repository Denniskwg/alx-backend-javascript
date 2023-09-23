const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('test calculateNumber', () => {

  it('test suite for type=SUM', () => {
    let num1 = 1.2;
    let num2 = 2.2;
    const result = calculateNumber('SUM', num1, num2);
    assert.strictEqual(result, 3);
  });

  it('test suite for type=SUBTRACT', () => {
    let num1 = 1.2;
    let num2 = 2.2;
    const result = calculateNumber('SUBTRACT', num1, num2);
    assert.strictEqual(result, 1);
  });

  it('test suite for type=DIVIDE', () => {
    let num1 = 1.2;
    let num2 = 2.2;
    const result = calculateNumber('DIVIDE', num1, num2);
    assert.strictEqual(result, 0.5);
  });

  it('test suite for type=DIVIDE', () => {
    let num1 = 1.2;
    let num2 = 0.2;
    const result = calculateNumber('DIVIDE', num1, num2);
    assert.strictEqual(result, 'Error');
  });
});
