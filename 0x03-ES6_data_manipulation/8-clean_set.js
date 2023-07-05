export default function cleanSet(set, startString) {
  if (!startString) {
    return startString;
  }
  let filteredValues = Array.from(set).filter((value) => value.startsWith(startString));
  filteredValues = filteredValues.map((item) => {
    const startIndex = item.indexOf(startString);
    if (startIndex === -1) {
      return '';
    }
    const endIndex = startIndex + startString.length;
    return item.slice(endIndex, item.length);
  });

  return filteredValues.join('-');
}
