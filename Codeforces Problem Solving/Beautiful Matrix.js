/**
 ** Author: Imran Parthib
 *!Date: 11-12-2024 11:53:17
 */

// Beautiful Matrix
// Problem link: https://codeforces.com/problemset/problem/263/A
// Type: Implementation

// Solution

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let matrix = [];
let onePosition = null;

// Read each line and build the matrix
rl.on("line", (line) => {
  const row = line.split(" ").map(Number);
  matrix.push(row);
  // Find the position of "1"
  if (onePosition === null) {
    const colIndex = row.indexOf(1);
    if (colIndex !== -1) {
      onePosition = [matrix.length, colIndex + 1]; // 1-based index
    }
  }

  if (matrix.length === 5) {
    rl.close();
  }
});

rl.on("close", () => {
  const [x, y] = onePosition;
  // Calculate the moves to center (3, 3)
  const moves = Math.abs(3 - x) + Math.abs(3 - y);
  console.log(moves);
});
