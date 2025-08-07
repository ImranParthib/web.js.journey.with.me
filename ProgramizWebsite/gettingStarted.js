console.log("I am learning JavaScript");
let num = 5;
function fibonacci(totalTerm) {
  let firstTerm = 0;
  let secondTerm = 1;
  let result = firstTerm + "," + secondTerm;
  if (totalTerm <= 0) {
    return 0;
  }
  let lastTerm = firstTerm + secondTerm;
  for (let i = 0; i < totalTerm; i++) {
    result += "," + lastTerm;
    console.log(result);
    firstTerm = secondTerm;
    secondTerm = lastTerm;
    lastTerm = firstTerm + secondTerm;
    }
    console.log(result);
}

fibonacci(10);
