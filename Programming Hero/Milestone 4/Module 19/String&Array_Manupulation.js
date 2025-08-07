// !String Manipulation Techniques in JavaScript

// Length Property - The length property returns the length of a string.
let str = "Hello, World!";
console.log(str.length); // Output: 13

// Slice - The slice() method extracts a part of a string and returns the extracted part in a new string.
let sliceStr = str.slice(0, 5);
console.log(sliceStr); // Output: Hello

// Substring - The substring() method extracts the characters from a string, between two specified indices, and returns the new sub string.
let subStr = str.substring(0, 5);
console.log(subStr); // Output: Hello

// Split - The split() method is used to split a string into an array of substrings, and returns the new array.
let text = "How are you doing today?";
let words = text.split(" ");
console.log(words); // Output: [ 'How', 'are', 'you', 'doing', 'today?' ]

// Join - The join() method joins the elements of an array into a string, and returns the string.
let joinedText = words.join(" ");
console.log(joinedText); // Output: How are you doing today?

// To Lowercase - The toLowerCase() method converts a string to lowercase letters.
let lowerStr = str.toLowerCase();
console.log(lowerStr); // Output: hello, world!

// To Uppercase - The toUpperCase() method converts a string to uppercase letters.
let upperStr = str.toUpperCase();
console.log(upperStr); // Output: HELLO, WORLD!

// Trim - The trim() method removes whitespace from both ends of a string.
let trimStr = str.trim();
console.log(trimStr); // Output: Hello, World!

// Includes - The includes() method determines whether a string contains the specified value.
let isExist = str.includes("World");
console.log(isExist); // Output: true

// Replace - The replace() method replaces a specified value with another value in a string.
let newStr = str.replace("World", "JavaScript");
console.log(newStr); // Output: Hello, JavaScript!

// Char At - The charAt() method returns the character at a specified index in a string.
let char = str.charAt(7);
console.log(char); // Output: W

// Char Code At - The charCodeAt() method returns the Unicode of the character at a specified index in a string.
let charCode = str.charCodeAt(7);
console.log(charCode); // Output: 87

// From Char Code - The fromCharCode() method converts Unicode values into characters.
let charFromCode = String.fromCharCode(87);
console.log(charFromCode); // Output: W

// Concat - The concat() method joins two or more strings.
let str1 = "Hello, ";
let str2 = "World!";
let newStrJoin = str1.concat(str2);
console.log(newStrJoin); // Output: Hello, World!

// Repeat - The repeat() method returns a new string with a specified number of copies of an existing string.
let repeatStr = str.repeat(3);
console.log(repeatStr); // Output: Hello, World!Hello, World!Hello, World!

// Pad Start - The padStart() method pads the current string with another string until the resulting string reaches the given length.
let padStartStr = str.padStart(20, "*");
console.log(padStartStr); // Output: ***Hello, World!

// Pad End - The padEnd() method pads the current string with another string until the resulting string reaches the given length.
let padEndStr = str.padEnd(20, "*");
console.log(padEndStr); // Output: Hello, World!***

// Starts With - The startsWith() method determines whether a string begins with the specified characters.
let isStart = str.startsWith("Hello");
console.log(isStart); // Output: true

// Ends With - The endsWith() method determines whether a string ends with the specified characters.
let isEnd = str.endsWith("World!");
console.log(isEnd); // Output: true

// Search - The search() method searches for a specified value in a string and returns the position of the match.
let position = str.search("World");
console.log(position); // Output: 7

// Index Of - The indexOf() method returns the position of the first occurrence of a specified value in a string.
let firstPos = str.indexOf("o");
console.log(firstPos); // Output: 4

// Last Index Of - The lastIndexOf() method returns the position of the last occurrence of a specified value in a string.
let lastPos = str.lastIndexOf("o");
console.log(lastPos); // Output: 8

// Match - The match() method searches a string for a specified value and returns the first match as an array.
let matches = str.match("o");
console.log(matches); // Output: [ 'o', index: 4, input: 'Hello, World!', groups: undefined ]

// Match All - The matchAll() method returns an iterator of all results matching a string against a regular expression.
let matchAll = Array.from(str.matchAll("o"));
console.log(matchAll); // Output: [ [ 'o', index: 4, input: 'Hello, World!', groups: undefined ], [ 'o', index: 8, input: 'Hello, World!', groups: undefined ] ]

// !Array Manipulation Techniques

// Length Property - The length property returns the number of elements in an array.
let fruits = ["Apple", "Banana", "Kiwi"];
console.log(fruits.length); // Output: 3

// Push - The push() method adds one or more elements to the end of an array and returns the new length of the array.
fruits.push("Orange");
console.log(fruits); // Output: [ 'Apple', 'Banana', 'Kiwi', 'Orange' ]

// Pop - The pop() method removes the last element from an array and returns that element.
let popped = fruits.pop();
console.log(popped); // Output: Orange
console.log(fruits); // Output: [ 'Apple', 'Banana', 'Kiwi' ]

// Shift - The shift() method removes the first element from an array and returns that element.
let shifted = fruits.shift();
console.log(shifted); // Output: Apple
console.log(fruits); // Output: [ 'Banana', 'Kiwi' ]

// Unshift - The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
fruits.unshift("Strawberry");
console.log(fruits); // Output: [ 'Strawberry', 'Banana', 'Kiwi' ]

// Slice - The slice() method extracts a part of an array and returns the extracted part in a new array.
let sliceFruits = fruits.slice(1, 2);
console.log(sliceFruits); // Output: [ 'Banana' ]

// Splice - The splice() method adds or removes elements from an array.
fruits.splice(1, 0, "Lemon", "Mango");
console.log(fruits); // Output: [ 'Strawberry', 'Lemon', 'Mango', 'Banana', 'Kiwi' ]

// Concat - The concat() method is used to merge two or more arrays.
let moreFruits = ["Orange", "Pineapple"];
let allFruits = fruits.concat(moreFruits);
console.log(allFruits); // Output: [ 'Strawberry', 'Lemon', 'Mango', 'Banana', 'Kiwi', 'Orange', 'Pineapple' ]

// Join - The join() method joins all elements of an array into a string.
let fruitsString = fruits.join(", ");
console.log(fruitsString); // Output: Strawberry, Lemon, Mango, Banana, Kiwi

// Index Of - The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
let index = fruits.indexOf("Banana");
console.log(index); // Output: 3

// Last Index Of - The lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present.
let lastIndex = fruits.lastIndexOf("Kiwi");
console.log(lastIndex); // Output: 4

// Includes - The includes() method determines whether an array includes a certain value among its entries.
let hasMango = fruits.includes("Mango");
console.log(hasMango); // Output: true

// For Each - The forEach() method calls a function once for each element in an array, in order.
fruits.forEach((fruit) => console.log(fruit));

// Map - The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
let upperFruits = fruits.map((fruit) => fruit.toUpperCase());
console.log(upperFruits); // Output: [ 'STRAWBERRY', 'LEMON', 'MANGO', 'BANANA', 'KIWI' ]

// Filter - The filter() method creates a new array with all elements that pass the test implemented by the provided function.
let filteredFruits = fruits.filter((fruit) => fruit.startsWith("B"));
console.log(filteredFruits); // Output: [ 'Banana' ]

// Reduce - The reduce() method executes a reducer function on each element of the array, resulting in a single output value.
let fruitString = fruits.reduce((acc, fruit) => acc + ", " + fruit);
console.log(fruitString); // Output: Strawberry, Lemon, Mango, Banana, Kiwi

// Find - The find() method returns the value of the first element in the provided array that satisfies the provided testing function.
let foundFruit = fruits.find((fruit) => fruit.startsWith("K"));
console.log(foundFruit); // Output: Kiwi

// Find Index - The findIndex() method returns the index of the first element in the provided array that satisfies the provided testing function.
let foundIndex = fruits.findIndex((fruit) => fruit.startsWith("K"));
console.log(foundIndex); // Output: 4

// Sort - The sort() method sorts the elements of an array in place and returns the sorted array.
let sortedFruits = fruits.sort();
console.log(sortedFruits); // Output: [ 'Banana', 'Kiwi', 'Lemon', 'Mango', 'Strawberry' ]

// Reverse - The reverse() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
let reversedFruits = fruits.reverse();
console.log(reversedFruits); // Output: [ 'Kiwi', 'Banana', 'Mango', 'Lemon', 'Strawberry' ]

// Every - The every() method checks if all elements in an array pass a test (provided as a function).
let allStartWithS = fruits.every((fruit) => fruit.startsWith("S"));
console.log(allStartWithS); // Output: false

// Some - The some() method checks if any of the elements in an array pass a test (provided as a function).
let someStartWithS = fruits.some((fruit) => fruit.startsWith("S"));
console.log(someStartWithS); // Output: true
