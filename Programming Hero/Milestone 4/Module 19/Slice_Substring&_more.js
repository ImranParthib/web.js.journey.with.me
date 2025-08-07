// Slice an array
let fruits = ["Apple", "Banana", "Kiwi", "Orange"];
let sliceFruits = fruits.slice(1, 3);
console.log(sliceFruits); // Output: [ 'Banana', 'Kiwi' ]

// Slice a string
let str = "Programming Hero";
let sliceStr = str.slice(0, 11);
console.log(sliceStr); // Output: Programming

// Substring a string
let subStr = str.substring(0, 11);
console.log(subStr); // Output: Programming

// Split a string into an array
let text = "How are you doing today?";
const myArray = text.split(" ");
console.log(myArray); // Output: [ 'How', 'are', 'you', 'doing', 'today?' ]

// Join elements of an array into a string
const myString = myArray.join(" ");
console.log(myString); // Output: How are you doing today?

// Convert a string to lowercase
let lowerStr = str.toLowerCase();
console.log(lowerStr); // Output: programming hero

// Convert a string to uppercase
let upperStr = str.toUpperCase();
console.log(upperStr); // Output: PROGRAMMING HERO

// Remove whitespace from both ends of a string
let trimStr = str.trim();
console.log(trimStr); // Output: Programming Hero

// Check if a string contains a specified value
let isExist = str.includes("Hero");
console.log(isExist); // Output: true

// Replace a specified value with another value in a string
let newStr = str.replace("Hero", "World");
console.log(newStr); // Output: Programming World

// Get the character at a specified index in a string
let char = str.charAt(7);
console.log(char); // Output: m

// Get the Unicode of the character at a specified index in a string
let charCode = str.charCodeAt(7);
console.log(charCode); // Output: 109

// Convert Unicode values into characters
let charFromCode = String.fromCharCode(109);
console.log(charFromCode); // Output: m

// Join two or more strings
let str1 = "Hello, ";
let str2 = "World!";
let newStrJoin = str1.concat(str2);
console.log(newStrJoin); // Output: Hello, World!

// Repeat a string a specified number of times
let repeatStr = str.repeat(3);
console.log(repeatStr); // Output: Programming HeroProgramming HeroProgramming Hero

// Pad a string with another string until it reaches a specified length
let padStartStr = str.padStart(20, "*");
console.log(padStartStr); // Output: ***Programming Hero

// Pad a string with another string until it reaches a specified length
let padEndStr = str.padEnd(20, "*");
console.log(padEndStr); // Output: Programming Hero***

// Check if a string starts with a specified value
let isStart = str.startsWith("Programming");
console.log(isStart); // Output: true

// Check if a string ends with a specified value
let isEnd = str.endsWith("Hero");
console.log(isEnd); // Output: true

// Search for a specified value in a string and return the position of the match
let position = str.search("Hero");
console.log(position); // Output: 12

// Search for a specified value in a string and return the position of the first occurrence
let firstPos = str.indexOf("o");
console.log(firstPos); // Output: 4

// Search for a specified value in a string and return the position of the last occurrence
let lastPos = str.lastIndexOf("o");
console.log(lastPos); // Output: 14

// Search for a specified value in a string and return the matches as an array
let matches = str.match("o");
console.log(matches); // Output: [ 'o', index: 4, input: 'Programming Hero', groups: undefined ]

// Search for a specified value in a string and return the matches as an array
let globalMatches = str.match(/o/g);
console.log(globalMatches); // Output: [ 'o', 'o' ]
