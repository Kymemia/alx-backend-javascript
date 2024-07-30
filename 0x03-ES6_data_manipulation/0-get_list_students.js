export class Student {
  constructor(id, firstName, location) {
    this.id = id;
    this.firstName = firstName;
    this.location = location;
  }
}

export default function getListStudents() {
  const students = [
    { id: '1', firstName: 'Guillaume', location: 'San Francisco' },
    { id: '2', firstName: 'James', location: 'Columbia' },
    { id: '5', firstName: 'Serena', location: 'San Francisco' },
  ];

  return students.map((student) => new Student(student.id, student.firstName, student.location));
}
