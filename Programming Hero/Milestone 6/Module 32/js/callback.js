function fetchData(callback) {
  setTimeout(() => {
    const data = { name: "John", age: 30 };
    callback(data);
  }, 1000);
}

function handleData(data) {
  console.log("Data received:", data);
}

fetchData(handleData);

// here's a simpler example to illustrate the concept of a callback function:

function greet(name, callback) {
  console.log("Hello, " + name + "!");
  callback();
}

function sayGoodbye() {
  console.log("Goodbye!");
}

greet("Alice", sayGoodbye);

// More Examples

const finalResult = (callback, value, ...args) => {
  const addValue = callback(...args);
  console.log(addValue);
  const finalValue = addValue ** value;
  console.log(finalValue);
};

const addition = (a, b) => {
  return a + b;
};

finalResult(addition, 10, 2, 3); // Pass additional arguments for the addition function

// More Easy

function greetYou(callback) {
  callback();
}

function greeting() {
  console.log("Sya kie fui");
}

greetYou(greeting);
