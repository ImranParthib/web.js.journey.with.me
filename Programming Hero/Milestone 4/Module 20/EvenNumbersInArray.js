//Date: 2024-06-28
//Time: 3:16 PM

// 1. Even Numbers in Array
// Create a function that takes an array of numbers and returns only the even values.
// Examples
// onlyEven([1, 2, 3, 4, 5, 6, 7, 8]) ➞ [2, 4, 6, 8]
// onlyEven([43, 65, 23, 89, 53, 9, 6]) ➞ [6]
// onlyEven([718, 991, 449, 644, 380, 440]) ➞ [718, 644, 380, 440]

function onlyEven(arr) {
  return arr.filter((num) => num % 2 === 0);
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(onlyEven(arr)); // ➞ [2, 4, 6, 8]

//Alternative Approach
function evenNumbers(numbers) {
  let even = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      even.push(numbers[i]);
    }
  }
  return even;
}

let numbers = [43, 65, 23, 89, 53, 9, 6,8,4,2,10];
const even = evenNumbers(numbers);
console.log(even);
