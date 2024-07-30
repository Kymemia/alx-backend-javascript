export default function getListStudents() {
  class Student {
    constructor(id, firstName, location) {
      this.id = id;
      this.firstName = firstName;
      this.location = location;
    }
  }
  const student1 = new Student(1, 'Guillaume', 'San Francisco');
  const student2 = new Student(2, 'James', 'Columbia');
  const student3 = new Student(5, 'Serena', 'San Francisco');
  const arrayOfStudents = [student1, student2, student3];
  return arrayOfStudents;
}
