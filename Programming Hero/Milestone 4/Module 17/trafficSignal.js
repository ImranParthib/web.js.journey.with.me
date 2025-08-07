const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function trafficSignal(tSignal) {
  if (tSignal === "green") {
    return "Go";
  } else if (tSignal === "yellow") {
    return "Wait";
  } else if (tSignal === "red") {
    return "Stop";
  } else {
    return "Invalid Signal";
  }
}

rl.question("Enter the traffic signal: ", (answer) => {
  console.log(trafficSignal(answer));
  rl.close();
});
