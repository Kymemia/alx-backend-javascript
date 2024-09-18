const http = require('http');
const fs = require('fs').promises;
const path = require('path');

async function getStudentsFromCSV (filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf8');
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

    let totalStudents = 0;

    Object.keys(students).forEach((field) => {
      totalStudents += students[field].length;
    });

    return { totalStudents, details: students };
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

const app = http.createServer(async (req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    const filePath = path.resolve(__dirname, 'database.csv');
    try {
      const { totalStudents, details } = await getStudentsFromCSV(filePath);
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
      res.end(`${error.message}\n`);
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not found\n');
  }
});

app.listen(1245, () => {
  console.log('Server listening on port 1245');
});

module.exports = app;
