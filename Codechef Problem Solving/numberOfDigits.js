// !https://www.codechef.com/practice/course/javascript/LPJAS11/problems/LPJSPR123
// let N = parseInt(inputChar);

// Write your code here

const numberOfDigits = (input) => {
  let count = 0;
  while (input > 0) {
    input = Math.floor(input / 10);
    count++;
  }
  return count;
};

const result = numberOfDigits(N);
console.log(result);


// Another

let N = 1543;
let NString = N.toString();
let count = NString.length;
console.log(count);