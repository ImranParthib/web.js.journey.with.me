console.log("0");
console.log("1");
let count = 2;

const fibonacci = (firstTerm, secondTerm) => {
  if (count <= 19) {
    let newFibo = firstTerm + secondTerm;
    console.log(newFibo);

    secondTerm = firstTerm;
    firstTerm = newFibo;
    count += 1;
    fibonacci(firstTerm, secondTerm);
  } else {
    return;
  }
};

fibonacci(0, 1);
