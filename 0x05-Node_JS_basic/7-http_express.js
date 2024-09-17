const express = require('express');
const fs = require('fs').promises;

const app = express();
const port = 1245;

async function getStudentsData (path) {
  try {
    const data = await fs.readFile(path, 'utf8');
    const lines = data.trim().split('\n');

    if (lines.length <= 1) {
      return { totalStudents: 0, details: {} };
    }

    const students = {};
    lines.slice(1).forEach((line) => {
      const fields = line.split(',');
      const field = fields[fields.length - 1].trim();

      if (!students[field]) {
        students[field] = [];
      }

      students[field].push(fields[0]);
    });

    const totalStudents = Object.values(students).reduce((acc, list) => acc + list.length, 0);

    return { totalStudents, details: students };
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  try {
    const { totalStudents, details } = await getStudentsData(process.argv[2]);
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('This is the list of our students\n');
    res.write(`Number of students: ${totalStudents}`);
    Object.keys(details).forEach((field) => {
      const numStudents = details[field].length;
      res.write(`\nNumber of students in ${field}: ${numStudents}. List: ${details[field].join(', ')}`);
    });
    res.end();
  } catch (error) {
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.write('This is the list of our students\n');
    res.end(`${error.message}\n`);
  }
});

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
module.exports = app;
