const request = require('supertest');
const app = require('./api');
const { expect } = require('chai');

describe('Cart Page', () => {
	describe('GET /cart/:id', () => {
		it('should return 200 plus the correct message when :id is a number', (done) => {
			request(app)
			  .get('/cart/123')
			  .end((err, res) => {
				  expect(res.status).to.equal(200);
				  expect(res.text).to.equal('Payment methods for cart 123');
				  done();
			  });
		});

		it('should return 404 when :id is not a number', (done) => {
			request(app)
			  .get('/cart/abc')
			  .end((err, res) => {
				  expect(res.status).to.equal(404);
				  done();
			  });
		});

		it('should return 404 when :id contains special characters', (done) => {
			request(app)
			  .get('/cart/12!@')
			  .end((err, res) => {
				  expect(res.status).to.equal(404);
				  done();
			  });
		});

		it('should return 404 when :id is empty', (done) => {
			request(app)
			  .get('/cart/')
			  .end((err, res) => {
				  expect(res.status).to.equal(404);
				  done();
			  });
		});
	});
});

describe('GET /available_payments', () => {
	it('should return status 200 & correct payment methods', (done) => {
		request(app)
		  .get('/available_payments')
		  .end((err, res) => {
			  expect(res.status).to.equal(200);
			  expect(res.headers['content-type']).to.include('application/json');
			  expect(res.body).to.deep.equal({
				  payment_methods: {
					  credit_cards: true, 
					  paypal: false
				  }
			  });
			  done();
		  });
	});
});

describe('POST /login', () => {
	it('should return a welcome message with a valid userName', (done) => {
		request(app)
		  .post('/login')
		  .send({ userName: 'Seb' })
		  .end((err, res) => {
			  expect(res.status).to.equal(200);
			  expect(res.text).to.equal('Welcome Seb');
			  done();
		  });
	});

	it('should return 404 when userName is missing', (done) => {
		request(app)
		  .post('/login')
		  .send({})
		  .end((err, res) => {
			  expect(res.status).to.equal(404);
			  done();
		  });
	});
});
