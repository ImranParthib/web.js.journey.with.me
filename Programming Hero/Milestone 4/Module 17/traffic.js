const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the traffic signal: ", (tSignal) => {
  if (tSignal === "green") {
    console.log("Go");
  } else if (tSignal === "yellow") {
    console.log("Wait");
  } else if (tSignal === "red") {
    console.log("Stop");
  } else {
    console.log("Invalid Signal");
  }

  rl.close();
});
