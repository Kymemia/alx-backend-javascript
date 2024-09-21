const fs = require('fs');
const promise = require('promise');

module.exports = function readDatabase(filePath) {
	return new Promise((resolve, reject) => {
		fs.readFile(filePath, 'utf8', (err, data) => {
			if (err) {
				reject(err);
			} else {
				const database = {};
				const lines = data.split('\n');
				lines.forEach((line) => {
					const [field, firstName] = line.split(',');
					if (!database[field]) {
						database[field] = [];
					}
					database[field].push(firstname);
				});
				resolve(database);
			}
		});
	});
}
