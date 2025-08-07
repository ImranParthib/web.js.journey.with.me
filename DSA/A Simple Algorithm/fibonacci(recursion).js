const readline = require("readline");

function fibonacci(num) {
  if (num < 2) {
    return num;
  } else {
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the number of terms: ", (nTerms) => {
  nTerms = parseInt(nTerms);
  if (nTerms <= 0) {
    console.log("Enter a positive integer.");
  } else {
    let result = "";
    for (let i = 0; i < nTerms; i++) {
      result += fibonacci(i) + " ";
    }
    console.log(result.trim());
  }
  rl.close();
});
