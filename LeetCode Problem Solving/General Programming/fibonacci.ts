let firstTerm: number = 0;
let secondTerm: number = 1;
let n: number = 20;

console.log("Fibonacci Sequence:");

let fibonacci: string = `${firstTerm}, ${secondTerm}`;

for (let i = 2; i < n; i++) {
    let nextTerm = firstTerm + secondTerm;
    fibonacci += `, ${nextTerm}`;
    firstTerm = secondTerm;
    secondTerm = nextTerm;
}

console.log(fibonacci);
