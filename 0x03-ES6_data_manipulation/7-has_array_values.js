export default function hasValuesFromArray(set, array) {
  const setArray = Array.from(set);
  return array.every((element) => setArray.includes(element));
}
