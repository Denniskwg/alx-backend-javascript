const http = require('http');
const fs = require('fs');

let path = process.argv[2];

const hostname = '127.0.0.1';
const port = 1245;

const app = http.createServer((req, res) => {
  const { url } = req;
  if (url === '/') {
    res.end('Hello Holberton School!');
  } else if (url === '/students') {
    if (!fs.existsSync(path)) {
      path = 'database.csv';
    }
    if (!fs.statSync(path).isFile()) {
      path = 'database.csv';
    }
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
    res.end(`This is the list of our students\nNumber of students: ${newArr.length}\nNumber of students in CS: ${csNum}. List: ${cs.join(', ')}\nNumber of students in SWE: ${sweNum}. List: ${swe.join(', ')}`);
  }
});

app.listen(port, hostname, () => {
  console.log(`app running at http://${hostname}:${port}/`);
});

module.exports = app;
