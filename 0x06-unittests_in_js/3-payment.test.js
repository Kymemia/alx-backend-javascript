const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');
const mocha = require('mocha');
const { describe, it, before } = mocha;

describe('sendPaymentRequestToApi', function () {
  let expect;

  before(async function () {
    const chai = await import('chai');
    expect = chai.expect;
  });

  it('should call Utils.calculateNumber with SUM, 100, & 20', function () {
    const spy = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 20);
    expect(spy.calledOnce);
    expect(spy.calledWith('SUM', 100, 20));
    spy.restore();
  });
});
