const sendPaymentRequestToApi = require('./5-payment');
const sinon = require('sinon');
const Utils = require('./utils');
const chai = require('chai');

describe('sendPaymentRequestToApi', () => {
  let spy = null;

  beforeEach(() => {
    spy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    spy.restore();
  });

  it('call sendPaymentRequestToAPI with 100, and 20', () => {
    sendPaymentRequestToApi(100, 20);
    chai.expect(spy.calledOnce).to.be.true;
    chai.expect(spy.calledWith('The total is: 120')).to.be.true;
  });

  it('call sendPaymentRequestToAPI with 10, and 10', () => {
    sendPaymentRequestToApi(10, 10);
    chai.expect(spy.calledOnce).to.be.true;
    chai.expect(spy.calledWith('The total is: 20')).to.be.true;
  });
});
