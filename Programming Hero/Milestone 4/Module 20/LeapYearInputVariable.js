const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let year;
rl.question("Enter a year: ", (input) => {
  year = parseInt(input);
  rl.close();
  leapYear(); 
});

function leapYear() {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(year + " is a leap year.");
  } else {
    console.log(year + " is not a leap year.");
  }
}
