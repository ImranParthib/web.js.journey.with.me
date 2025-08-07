// ?Using prompt (Browser-based Solution):

function canDivideWatermelon(w) {
  // Check if the weight is greater than 2 and even
  if (w > 2 && w % 2 === 0) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}

// Prompt user input for the weight of the watermelon
let w = parseInt(prompt("Enter the weight of the watermelon:"));
canDivideWatermelon(w);

// ?Using readline (Node.js-based Solution):

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the weight of the watermelon: ", (input) => {
  let w = parseInt(input);

  function canDivideWatermelon(w) {
    if (w > 2 && w % 2 === 0) {
      console.log("YES");
    } else {
      console.log("NO");
    }
  }

  canDivideWatermelon(w);
  rl.close();
});
