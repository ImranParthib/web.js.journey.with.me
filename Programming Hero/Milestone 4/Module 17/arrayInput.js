const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const array = [];
const arrayLength = 7;
let currentIndex = 0;

console.log(`Please enter ${arrayLength} values:`);

const getArrayValues = () => {
  rl.question(`Enter value ${currentIndex + 1}: `, (answer) => {
    array.push(answer);

    if (++currentIndex < arrayLength) {
      getArrayValues();
    } else {
      rl.close();
      for (let i = 0; i < array.length; i++) {
        console.log(`Value at index ${i}: ${array[i]}`);
        console.log(`Index of ${array[i]}: ${array.indexOf(array[i])}`);
      }
    }
  });
};

getArrayValues();
