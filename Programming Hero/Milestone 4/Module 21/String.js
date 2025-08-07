// String is a primitive data type in JavaScript. It is a sequence of characters enclosed within single quotes ('') or double quotes (""). In JavaScript, strings are immutable, which means once a string is created, it cannot be changed. However, you can create a new string based on the existing string. In this module, we will learn about the following topics:

// String declaration
let str = "Hello, World!";
let str2 = "I Love Coding";
// String declaration using template literals
let str3 = `Hello, World!`;

// String length
console.log(str.length); // Output: 13

// String concatenation
let strConcat = str + str2;
console.log(strConcat); // Output: Hello, World!I Love Coding

// String interpolation
let name = "John Doe";
let age = 25;
let strInterpolation = `My name is ${name} and I am ${age} years old.`;
console.log(strInterpolation); // Output: My name is John Doe and I am 25 years old.

// String methods
// There are several methods available to manipulate strings in JavaScript. Some of the commonly used string methods are:

// toUpperCase(): It converts a string to uppercase.
let strUpperCase = str.toUpperCase();
console.log(strUpperCase); // Output: HELLO, WORLD!

// toLowerCase(): It converts a string to lowercase.
let strLowerCase = str.toLowerCase();
console.log(strLowerCase); // Output: hello, world!

// charAt(): It returns the character at a specified index.
let char = str.charAt(0);
console.log(char); // Output: H

// indexOf(): It returns the index of the first occurrence of a specified value in a string.
let index = str.indexOf("World");
console.log(index); // Output: 7

// lastIndexOf(): It returns the index of the last occurrence of a specified value in a string.
let lastIndex = str.lastIndexOf("o");
console.log(lastIndex); // Output: 8

// includes(): It checks whether a string contains a specified value.
let isIncludes = str.includes("World");
console.log(isIncludes); // Output: true

// startsWith(): It checks whether a string starts with a specified value.
let isStartsWith = str.startsWith("Hello");
console.log(isStartsWith); // Output: true

// endsWith(): It checks whether a string ends with a specified value.
let isEndsWith = str.endsWith("World!");
console.log(isEndsWith); // Output: true

// slice(): It extracts a part of a string and returns a new string.
let slicedStr = str.slice(0, 5);
console.log(slicedStr); // Output: Hello

// substring(): It extracts a part of a string between two specified indices and returns a new string.
let subStr = str.substring(0, 5);
console.log(subStr); // Output: Hello

// substr(): It extracts a specified number of characters from a string, starting at a specified index, and returns a new string.
let subStr2 = str.substr(0, 5);
console.log(subStr2); // Output: Hello

// split(): It splits a string into an array of substrings based on a specified separator.
let splitStr = str.split(",");
console.log(splitStr); // Output: ['Hello', ' World!']

// replace(): It replaces a specified value with another value in a string.
let replacedStr = str.replace("World", "JavaScript");
console.log(replacedStr); // Output: Hello, JavaScript!

// trim(): It removes whitespace from both ends of a string.
let strWithSpace = "   Hello, World!   ";
let trimmedStr = strWithSpace.trim();
console.log(trimmedStr); // Output: Hello, World!

// repeat(): It returns a new string with a specified number of copies of the original string.
let repeatedStr = str.repeat(2);
console.log(repeatedStr); // Output: Hello, World!Hello, World!

// String comparison
// You can compare two strings using comparison operators such as ==, !=, ===, and !==. The comparison is case-sensitive, which means 'Hello' and 'hello' are considered different strings.

let str1 = "Hello";
let str4 = "hello";
console.log(str1 == str2); // Output: false
console.log(str1 === str2); // Output: false

// String to number conversion
// You can convert a string to a number using the Number() function or the parseInt() and parseFloat() methods. If the string contains non-numeric characters, the conversion will result in NaN (Not a Number).

let strNum = "123";
let num = Number(strNum);
let num2 = parseInt(strNum);
console.log(num2);
console.log(num); // Output: 123


let strNum2 = "123.45";
let num3 = parseFloat(strNum2);
console.log(num3); // Output: 123.45
