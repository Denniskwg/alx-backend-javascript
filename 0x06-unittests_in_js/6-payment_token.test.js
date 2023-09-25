const getPaymentTokenFromAPI = require('./6-payment_token');
const sinon = require('sinon');
const Utils = require('./utils');
const chai = require('chai');

describe('getPaymentTokenFromAPI', () => {
  it('getPaymentTokenFromAPI returns a promise', (done) => {
    getPaymentTokenFromAPI(true)
      .then((result) => {
        chai.expect(result).to.deep.equal({ data: 'Successful response from the API' });
        done();
      })
      .catch((error) => {
        done(error);
      });
  });

  it('getPaymentTokenFromAPI returns nothing', (done) => {
    const result = getPaymentTokenFromAPI(false);
    chai.expect(result).to.equal(undefined);
    done();
  });
});
