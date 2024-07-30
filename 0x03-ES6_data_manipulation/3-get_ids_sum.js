/* eslint-disable import/extensions */
import getListStudents from './0-get_list_students.js';

export default function getStudentIdsSum() {
  const students = getListStudents();
  return students.reduce((accumulator, student) => accumulator + student.id, 0);
}
