const fs = require('fs');

const { spawnSync } = require('node:child_process');

function countStudents(path) {
  if (!fs.existsSync(path)) {
    throw new Error('Cannot load the database');
  }
  if (!fs.statSync(path).isFile()) {
    throw new Error('Cannot load the database');
  }
  const cat = spawnSync('cat', [path]);
  const arr = cat.stdout.toString().split('\n');
  const newArr = arr.slice(1, arr.length - 1);
  console.log(`Number of students: ${newArr.length}`);
  const vector = newArr.map((item) => item.split(','));
  const cs = [];
  const swe = [];
  let csNum = 0;
  let sweNum = 0;
  vector.forEach((item) => {
    if (item.includes('CS')) {
      cs.push(item[0]);
      csNum += 1;
    } else {
      swe.push(item[0]);
      sweNum += 1;
    }
  });
  console.log(`Number of students in CS: ${csNum}. List: ${cs.join(', ')}`);
  console.log(`Number of students in SWE: ${sweNum}. List: ${swe.join(', ')}`);
}

module.exports = countStudents;
