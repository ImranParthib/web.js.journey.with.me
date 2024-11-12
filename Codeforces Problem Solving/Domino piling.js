/**
 ** Author: Imran Parthib
 *!Date: 11-12-2024 11:34:13
 */

// Domino piling
// Problem link: https://codeforces.com/problemset/problem/50/A

// Solution

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function dominoPiling(m, n) {
  return Math.floor((m * n) / 2);
}

rl.question("", (input) => {
  const [m, n] = input.split(" ").map(Number);
  console.log(dominoPiling(m, n));
  rl.close();
});
