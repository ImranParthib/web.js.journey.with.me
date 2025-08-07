const numbers = [6, 78, 8, 1, 23, 45, 56, 78, 89];

const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers);

evenNumbers.forEach((evenNum) => {
  console.log(evenNum);
});

//FIND
const bigNum = numbers.find((num) => num < 100 && num > 80);
console.log(bigNum);

// Reduce

const maxNum = numbers.reduce((max, current) => {
  return current > max ? current : max;
}, numbers[0]);

console.log(maxNum); // Output: 89

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum); // Output: 384
