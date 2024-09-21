const utils = require('../utils');

class StudentsController {
  static getAllStudents(req, res) {
    utils.readDatabase('path/to/database.txt')
      .then((database) => {
        const fields = Object.keys(database).sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }));
        let response = 'This is the list of our students\n';
        fields.forEach((field) => {
          response += `Number of students in ${field}: ${database[field].length}. List: ${database[field].join(', ')}\n`;
        });
        res.status(200).send(response);
      })
      .catch((err) => {
        res.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(req, res) {
    const major = req.query.major;
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    utils.readDatabase('path/to/database.txt')
      .then((database) => {
        if (!database[major]) {
          res.status(404).send(`No students in ${major} major`);
          return;
        }
        res.status(200).send(`List: ${database[major].join(', ')}`);
      })
      .catch((err) => {
        res.status(500).send('Cannot load the database');
      });
  }
}
