const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('test calculateNumber', () => {

  it('first number rounded', () => {
    let num1 = 1.6;
    let num2 = 2.6;
    const result = calculateNumber(num1, num2);
    assert.strictEqual(result - 3, 2);
  });

  it('second number rounded', () => {
    let num1 = 1.6;
    let num2 = 2.6;
    const result = calculateNumber(num1, num2);
    assert.strictEqual(result - 2, 3);
  });

  it('both numbers rounded', () => {
    let num1 = 1.6;
    let num2 = 2.6;
    const result = calculateNumber(num1, num2);
    assert.strictEqual(result - 2, 3);
    assert.strictEqual(result - 3, 2);
  });
});
