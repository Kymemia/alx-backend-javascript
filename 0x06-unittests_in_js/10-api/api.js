const express = require('express');
const app = express();
const port = 7865;
app.use(express.json());

app.get('/', (req, res) => {
	res.send("Welcome to the payment system");
});

app.get("/cart/:id(\\d+)", (req, res) => {
	const cartId = req.params.id;
	res.send(`Payment methods for cart ${cartId}`);
});

app.get('/available_payments', (req, res) => {
	res.set('Content-Type', 'application/json');
	const payMethods = {
		payment_methods: {
			credit_cards: true,
			paypal: false
		}
	}
	res.send(payMethods);
});

app.post('/login', (req, res) => {
	const userName = req.body.userName;
	if (userName) {
		res.send(`Welcome ${userName}`);
	} else {
		res.status(404).send();
	}
});

const server = app.listen(port, () => {
	console.log('API available on localhost port 7865');
});

module.exports = app;
