const fs = require('fs');

module.exports = function countStudents (path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').filter(line => line);
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
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};
