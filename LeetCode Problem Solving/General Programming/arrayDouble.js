const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the number (V < 50): ", (input) => {
  const V = parseInt(input);
  const N = Array(10).fill(0); // Initialize an array of size 10 with zeros
  N[0] = V; // Set the first element of the array to the input value

  console.log(`N[0] = ${N[0]}`); // Print the first element separately

  // Loop through the array to calculate and print the subsequent elements
  for (let i = 1; i < 10; i++) {
    N[i] = N[i - 1] * 2;
    console.log(`N[${i}] = ${N[i]}`);
  }

  rl.close();
});
