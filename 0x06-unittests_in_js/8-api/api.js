const express = require('express');
const app = express();
const PORT = 7865;


app.get('/', (req, res) => {
	res.send('Welcome to the payment system');
});

const server = app.listen(PORT, () => {
	console.log('API vailable on localhost port 7865');
});

module.exports = app;
