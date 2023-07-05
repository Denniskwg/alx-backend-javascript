export default function getStudentsByLocation(arr, city) {
  const students = arr.filter((student) => student.location === city);
  return students;
}
