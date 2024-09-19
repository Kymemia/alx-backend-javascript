const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');
const mocha = require('mocha');
const { describe, it, before, after } = mocha;

describe('sendPaymentRequestToApi', function () {
  let expect;
  let consoleSpy;

  before(async function () {
    const chai = await import('chai');
    expect = chai.expect;
    sinon.stub(Utils, 'calculateNumber').returns(10);
    consoleSpy = sinon.spy(console, 'log');
  });

  after(function () {
	  Utils.calculateNumber.restore();
	  console.log.restore();
  });

  it('should call Utils.calculateNumber with SUM, 100, & 20 then log the correct message', function () {
    sendPaymentRequestToApi(100, 20);
    expect(Utils.calculateNumber.calledOnceWith('SUM', 100, 20)).to.be.true;
    expect(consoleSpy.calledOnceWith('The total is: 10'));
  });
});
