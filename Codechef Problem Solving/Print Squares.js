const readline = require("readline");

// https://www.codechef.com/practice/course/javascript/LPJAS11/problems/LPJSPR121
// let N = parseInt(inputChar);

// Write your code here
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question( (input) => {
  const N = parseInt(input);
  let y = 1;
  let result = [];

  while (y <= N) {
    result.push(y * y);
    y++;
  }

  console.log(result.join(" "));
  rl.close();
});
