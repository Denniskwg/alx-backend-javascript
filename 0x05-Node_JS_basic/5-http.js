const http = require('http');
const fs = require('fs');

const path = process.argv[2];

const hostname = '127.0.0.1';
const port = 1245;

const app = http.createServer((req, res) => {
  const { url } = req;
  if (url === '/') {
    res.end('Hello Holberton School!');
  } else if (url === '/students') {
    let result = '';
    if (!fs.existsSync(path)) {
      result = 'Cannot load the database';
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
    res.end(result);
  }
});

app.listen(port, hostname, () => {
  console.log(`app running at http://${hostname}:${port}/`);
});

module.exports = app;
