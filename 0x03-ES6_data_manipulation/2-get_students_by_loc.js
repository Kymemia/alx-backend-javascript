export default function getStudentsByLocation(city, listOfStudents) {
  return listOfStudents.filter((student) => student.location === city);
}
