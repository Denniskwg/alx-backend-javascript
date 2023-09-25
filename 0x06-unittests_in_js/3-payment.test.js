const sendPaymentRequestToApi = require('./3-payment');
const sinon = require('sinon');
const Utils = require('./utils');
const chai = require('chai');

describe('sendPaymentRequestToApi', () => {

  it('should call Utils.calculateNumber with correct arguments', () => {
    const spy = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 20);
    chai.expect(spy.calledOnce).to.be.true;
    chai.expect(spy.calledWith('SUM', 100, 20)).to.be.true;
    spy.restore();
  });

});
