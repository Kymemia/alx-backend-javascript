const http = require('http');
const fs = require('fs').promises;
const path = require('path');

async function getStudentsFromCSV (filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf8');
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
    const numberOfStudents = lines.length - 1;
    let response = `Number of students: ${numberOfStudents}\n`;

    Object.entries(students).forEach(([field, names]) => {
      response += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`;
    });

    return response;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

const app = http.createServer(async (req, res) => {
  const urlPath = req.url;
  const filePath = path.resolve(__dirname, 'database.csv');

  if (urlPath === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
  } else if (urlPath === '/students') {
    try {
      const studentsResponse = await getStudentsFromCSV(filePath);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end(`This is the list of our students:${studentsResponse}`);
    } catch (error) {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Cannot load the database');
    }
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not Found\n');
  }
});

app.listen(1245, () => {
  console.log('Server running on port 1245');
});

module.exports = app;
