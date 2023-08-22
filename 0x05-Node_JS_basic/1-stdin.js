process.stdin.setEncoding('utf8');
console.log('Welcome to Holberton School, what is your name?');

process.stdin.on('readable', () => {
  const line = process.stdin.read();
  if (line !== null) {
    process.stdout.write(`Your name is: ${line}`);
  }
});

process.on('exit', () => {
  console.log('This important software is now closing');
});
