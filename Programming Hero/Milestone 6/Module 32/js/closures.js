function createCounter() {
  let count = 0; // This variable is enclosed by the inner function

  return function () {
    count += 1;
    return count;
  };
}

const counter = createCounter();

console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
console.log(counter()); // Output: 3


// Another Example of Closure

const bank = owner => {
  let balance = 0;
  return amount => {
    balance += amount;
    return balance;
  };
};

const mofijBank = bank('Mofij');
console.log(mofijBank(100)); // Output: 100
console.log(mofijBank(200)); // Output: 300


// Easy Example of Closure

const outer = () => {
    let outerVar = 'I am outside!';
    const inner = () => {
        let innerVar = 'I am inside!';
        console.log(outerVar);
        console.log(innerVar);
    };
    return inner;
};

const innerFn = outer();
console.log(innerFn()); // Output: I am outside! I am inside!


// Another Example of Closure


const setA = () => {
    let a = 10;
    return () => {
        a++;
        return a;
    };
};

const incrementA = setA();
console.log(incrementA()); // Output: 11
console.log(incrementA()); // Output: 12

