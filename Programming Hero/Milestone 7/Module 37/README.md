# JavaScript ES6 Features

ES6 (ECMAScript 2015) introduced several powerful features that make JavaScript more modern and easier to work with. Below are some of the key features:

## 1. Let and Const

- **let**: Block-scoped variable declaration, used for variables that can be reassigned.
- **const**: Block-scoped variable declaration for variables that should not be reassigned.

```js
let name = "John"; // Can be reassigned
const age = 25; // Cannot be reassigned
```

## 2. Arrow Functions

A shorter syntax for writing functions. It lexically binds the `this` context, which is useful in callbacks.

```js
const add = (a, b) => a + b;
```

## 3. Template Literals

Template strings that allow embedding expressions and multiline strings using backticks (`` ` ``).

```js
const greeting = `Hello, ${name}!`;
```

## 4. Destructuring Assignment

Simplifies extracting values from arrays or objects into distinct variables.

```js
// Array destructuring
const [x, y] = [1, 2];

// Object destructuring
const { name, age } = { name: 'John', age: 25 };
```

## 5. Default Parameters

Allows parameters to have default values if no value is passed.

```js
function greet(name = 'Guest') {
    return `Hello, ${name}`;
}
```

## 6. Spread and Rest Operators

- **Spread (`...`)**: Expands an array or object into individual elements.
- **Rest (`...`)**: Collects all remaining elements into an array.

```js
// Spread
const arr = [1, 2, 3];
const newArr = [...arr, 4, 5];

// Rest
function sum(...numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}
```

## 7. Classes

A syntactic sugar for constructor functions and prototype-based inheritance.

```js
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}.`);
    }
}

const john = new Person('John', 25);
john.greet(); // Hello, my name is John.
```

## 8. Promises

Provides a cleaner way to handle asynchronous operations.

```js
const fetchData = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Data fetched!'), 1000);
});

fetchData.then((data) => console.log(data)).catch((error) => console.error(error));
```

## 9. Modules

ES6 introduced a native module system for importing and exporting code between files.

```js
// Exporting (file: math.js)
export const add = (a, b) => a + b;

// Importing (file: app.js)
import { add } from './math';
console.log(add(2, 3)); // 5
```

## 10. Enhanced Object Literals

Shorthand for defining properties and methods in objects.

```js
const name = 'John';
const person = {
    name, // Shorthand for name: name
    greet() { // Shorthand for greet: function() {}
        console.log('Hello');
    }
};
```

These ES6 features greatly improve code readability, maintainability, and ease of use.

