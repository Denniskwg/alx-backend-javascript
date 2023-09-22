function roundNumber(number) {
  return Math.round(number);
}

function calculateNumber(a, b) {
  const x = roundNumber(a);
  const y = roundNumber(b);
  return x + y;
}
module.exports = calculateNumber;
