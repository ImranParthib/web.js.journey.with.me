/**
 ** Author: Imran Parthib
 *!Date: 11-12-2024 12:47:37
 */

// Theatre Square
// Problem link:  https://codeforces.com/problemset/problem/1/A
// Type: Math

// Solution
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function theatreSquare(n, m, a) {
  return Math.ceil(n / a) * Math.ceil(m / a);
}

rl.question("", (input) => {
  const [m, n, a] = input.split(" ").map(Number);
  console.log(theatreSquare(m, n, a));
  rl.close();
});
