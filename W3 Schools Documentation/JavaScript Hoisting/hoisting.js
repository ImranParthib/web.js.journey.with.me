// Example demonstrating hoisting with var, let, const, and functions

// Variable hoisting with var
console.log(name); // Output: undefined
var name = "Refinie";
console.log(name); // Output: Refinie

// Variable hoisting with let
console.log(isTrue); // ReferenceError: Cannot access 'isTrue' before initialization
let isTrue = true;
console.log(isTrue); // Output: true

// Variable hoisting with const
console.log(isFalse); // ReferenceError: Cannot access 'isFalse' before initialization
const isFalse = false;
console.log(isFalse); // Output: false

// Function hoisting
myFunction(); // Output: Hello, World!

function myFunction() {
  console.log("Hello, World!");
}

// Explanation:
// Variables declared with var are hoisted and initialized with undefined.
// Variables declared with let and const are hoisted but not initialized, leading to a Temporal Dead Zone (TDZ) until the declaration is encountered.
// Function declarations are hoisted and can be called before they are defined.
