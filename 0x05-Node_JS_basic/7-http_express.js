const express = require('express');
const fs = require('fs');

const path = process.argv[2];

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  let result = '';
  if (!fs.existsSync(path)) {
    result = 'This is the list of our students\nCannot load the database';
  } else {
    const arr = fs.readFileSync(path, 'utf-8').split('\n');
    const newArr = arr.slice(1, arr.length - 1);
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
    result = `This is the list of our students\nNumber of students: ${newArr.length}\nNumber of students in CS: ${csNum}. List: ${cs.join(', ')}\nNumber of students in SWE: ${sweNum}. List: ${swe.join(', ')}`;
  }
  res.send(result);
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});

module.exports = app;
