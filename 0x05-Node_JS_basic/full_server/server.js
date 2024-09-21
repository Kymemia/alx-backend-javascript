const express = require('express');
const app = express();
const router = require('./routes/index');

app.use('/', router);

app.listen(1245, () => {
	console.log('Server started on port 1245');
});

export default app;
