export default function getListStudentIds(arr) {
  if (arr instanceof Array) {
    const ids = arr.map((item) => item.id);
    return ids;
  }
  return [];
}
