let firstTerm = 0,
  secondTerm = 1,
  finalTerm;

let result = `${firstTerm}, ${secondTerm}`;

for (let i = 2; i <= 5; i++) {
  finalTerm = firstTerm + secondTerm;
  result += `, ${finalTerm}`;
  firstTerm = secondTerm;
  secondTerm = finalTerm;
}

console.log(result);
