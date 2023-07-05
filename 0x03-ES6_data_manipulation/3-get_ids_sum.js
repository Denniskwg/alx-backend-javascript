export default function getStudentIdsSum(arr) {
  const sum = arr.reduce((accumulator, item) => accumulator + item.id, 0);
  return sum;
}
