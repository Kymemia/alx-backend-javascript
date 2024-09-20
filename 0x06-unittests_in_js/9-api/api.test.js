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
