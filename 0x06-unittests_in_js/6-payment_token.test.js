let expect;

before(async function () {
	const chai = await import('chai');
	expect = chai.expect;
});

const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function () {
	it('should return a resolved promise with correct data when success is true', function (done) {
		getPaymentTokenFromAPI(true).then(result => {
			expect(result).to.deep.equal({ data: 'Successful response from the API' });
			done();
		}).catch(done);
	});
});
