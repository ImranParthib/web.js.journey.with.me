// ?https://www.codechef.com/practice/course/javascript/LPJAS11/problems/LPJSPR124
// let N = parseInt(inputChar);

// Write your code here

// Codechef Solution

let N = parseInt(inputChar);

let sumOfDigits = 0;
let productOfDigits = 1;

while (N > 0) {
  let digit = N % 10; // Get the last digit
  sumOfDigits += digit; // Add the digit to sum
  productOfDigits *= digit; // Multiply the digit to product
  N = Math.floor(N / 10); // Remove the last digit
}

console.log(sumOfDigits, productOfDigits);

//My Approach
const productAndSumOfDigits = (n, condition) => {
  n = n.toString();
  let sum = 0;
  for (let i = 0; i < n.length; i++) {
    if (condition === "sum") {
      sum += parseInt(n[i]);
    }

    if (condition === "product") {
      return n[i] * n[i + 1];
    }
  }
  return sum;
};
const product = productAndSumOfDigits(22, "product");
const sum = productAndSumOfDigits(22, "sum");
let productAndSum = product.toString() + sum.toString();
console.log(productAndSum);

// More Structural Way of Solving the Problem

const productAndSumOfDigits = (n) => {
  n = n.toString();
  let sum = 0;
  let product = 1;
  for (let i = 0; i < n.length; i++) {
    let digit = parseInt(n[i]);
    sum += digit;
    product *= digit;
  }
  return { sum, product };
};

const n = 222; // Example input
const { sum, product } = productAndSumOfDigits(n);
console.log(`${sum} ${product}`);
