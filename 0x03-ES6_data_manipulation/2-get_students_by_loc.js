export default function getStudentsByLocation(city, listOfStudents) {
  return listOfStudents.filter((listOfStudents) => listOfStudents.location === city);
}
