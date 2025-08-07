function fibonacci(totalTerm) {
  let firstTerm = 0;
  let secondTerm = 1;
  let result = firstTerm + "," + secondTerm;

  if (totalTerm <= 0) {
    return console.log("1");
  }

  let lastTerm = firstTerm + secondTerm;
  for (let i = 0; i < totalTerm - 2; i++) {
    result += "," + lastTerm;
    firstTerm = secondTerm;
    secondTerm = lastTerm;
    lastTerm = firstTerm + secondTerm;
  }

  console.log(result);
}

fibonacci(23);
