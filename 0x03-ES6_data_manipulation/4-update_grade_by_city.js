export default function updateStudentGradeByCity(arr, city, newGrades) {
  const students = arr.filter((student) => student.location === city);
  const newStudents = students.map((student) => {
    for (let i = 0; i < newGrades.length; i++) {
      if (newGrades[i].studentId === student.id) {
        student.grade = newGrades[i].grade;
      }
    }
    if (!student.grade) {
      student.grade = 'N/A';
    }
    return student;
  });
  return newStudents;
}
