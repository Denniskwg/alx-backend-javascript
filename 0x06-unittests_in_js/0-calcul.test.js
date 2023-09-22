import mocha from 'mocha';
import chai from 'chai';
import { expect } from 'chai';
import calculateNumber from './0-calcul.js';
import assert from 'assert';


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
