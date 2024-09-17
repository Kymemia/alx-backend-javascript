const fs = require('fs').promises;

module.exports = function countStudents (path) {
  return fs.readFile(path, 'utf8')
	   .then(data => {
		   const lines = data.split('\n').filter(line => line.trim() !== '');
		   let firstLine = true;

		   const students = lines.reduce((acc, line) => {
			   if (firstLine) {
				   firstLine = false;
				   return acc;
			   }

			   const student = line.split(',');
			   const field = student[3];
			   const name = student[0];

			   if (!acc[field]) {
				   acc[field] = [];
			   }
			   acc[field].push(name);
			   return acc;
		   }, {});

		   console.log(`Number of students: ${lines.length - 1}`);
		   Object.entries(students).forEach(([field, names]) => {
			   console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
		   });
	   })
	   .catch(() => {
		   throw new Error('Cannot load the database');
	   });
};
