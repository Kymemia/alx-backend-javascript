const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', function () {
  let consoleSpy;
  let chai;

  before(async function () {
    chai = await import('chai');
    const { expect } = chai;
    this.expect = expect;
  });

  beforeEach(function () {
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(function () {
    consoleSpy.restore();
  });

  it('should log the total is: 120 when called with 100 & 20', function () {
    sendPaymentRequestToApi(100, 20);
    this.expect(consoleSpy.calledOnce).to.be.true;
    this.expect(consoleSpy.calledWith('The total is: 120')).to.be.true;
  });

  it('should log the total is: 20 when called with 10 & 10', function () {
    sendPaymentRequestToApi(10, 10);
    this.expect(consoleSpy.calledOnce).to.be.true;
    this.expect(consoleSpy.calledWith('The total is: 20')).to.be.true;
  });
});
