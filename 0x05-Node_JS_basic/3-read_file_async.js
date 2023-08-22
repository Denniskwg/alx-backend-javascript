const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (error, content) => {
      if (error) {
        const error = new Error('Cannot load the database');
        reject(error);
      } else {
        const arr = content.split('\n');
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
        resolve();
      }
    });
  });
}

module.exports = countStudents;
