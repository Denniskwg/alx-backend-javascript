function calculateNumber(type, a, b) {
  if (type === 'SUM') {
    const x = Math.round(a);
    const y = Math.round(b);
    return x + y;
  }
  if (type === 'SUBTRACT') {
    const x = Math.round(a);
    const y = Math.round(b);
    return y - x;
  }
  if (type === 'DIVIDE') {
    const x = Math.round(a);
    const y = Math.round(b);
    if (y === 0) {
      return 'Error';
    }
    return x / y;
  }
}
module.exports = calculateNumber;
