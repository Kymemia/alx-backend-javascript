export default function updateStudentGradeByCity(students, city, newGrades) {
  const cityOfStudents = students.filter((student) => student.location === city);
  return cityOfStudents.map((student) => {
    const newGrade = newGrades.find((grade) => grade.studentId === student.id);
    return {
      ...student,
      grade: newGrade ? newGrade.grade : 'N/A',
    };
  });
}
