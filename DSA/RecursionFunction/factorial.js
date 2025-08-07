// simple factorial function using recursion
function factorial(num) {
  if (num == 0 || num == 1) {
    return 1;
  }
  return num * factorial(num - 1);
}

const result = factorial(5);
console.log(result);

// factorial function using arrow function

const factorialFunction = (num) => {
  return num == 1 || num == 0 ? 1 : num * factorial(num - 1);
};
const numFactorial = factorialFunction(5);
console.log(numFactorial);
