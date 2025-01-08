const fibonacci = (n) => {
  let firstNum = 0,
    secondNum = 1;
  let lastNum = firstNum + secondNum;
  let result = `${firstNum} ${secondNum}`;

  for (let i = 2; i <= n; i++) {
    result += ` ${lastNum}`;
    firstNum = secondNum;
    secondNum = lastNum;
    lastNum = firstNum + secondNum;
  }

  console.log(result);
  console.log(typeof result);
};

const res = fibonacci(10);

// Using Recursion

const fibonacciRecursion = (n, result = []) => {
    if (n <= 1) {
         
        return result;
    }
    if (result.length < 2) {
        result = [0, 1];
    }
    result.push(result[result.length - 1] + result[result.length - 2]);
    return fibonacciRecursion(n - 1, result);
};

const result = fibonacciRecursion(10);

console.log(result.join(' ')); // 0 1 1 2 3 5 8 13 21 34 55
console.log(typeof result); // object actually it is an array
arraycheck = Array.isArray(result);
console.log(arraycheck); // true