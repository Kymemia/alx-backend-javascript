export default function getStudentsByLocation(city, students) {
  if (Array.isArray(students)) {
    const selectStudents = students.filter((student)
	    => student.location.toLowerCase() === city.toLowerCase());
    return selectStudents;
  }
  return [];
}
