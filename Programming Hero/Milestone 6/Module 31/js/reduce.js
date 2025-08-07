// !The reduce method in JavaScript is a powerful tool for transforming an array into a single value.
// Here are some common examples of what you can do with reduce:

// * Sum of all elements in an array
// * Product of all elements in an array
// * Finding the maximum value in an array
// * Counting occurrences of elements in an array
// * Flattening an array of arrays

// Example array
const numbers = [23, 46, 67, 7];

// 1. Sum of all elements in an array
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Sum:", sum); // Output: 143

// 2. Product of all elements in an array
const product = numbers.reduce((acc, curr) => acc * curr, 1);
console.log("Product:", product); // Output: 497742

// 3. Finding the maximum value in an array
const max = numbers.reduce(
  (acc, curr) => (curr > acc ? curr : acc),
  numbers[0]
);
console.log("Max:", max); // Output: 67

// 4. Counting occurrences of elements in an array
const fruits = [
  "apple",
  "banana",
  "orange",
  "apple",
  "orange",
  "banana",
  "banana",
];
const countOccurrences = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});
console.log("Occurrences:", countOccurrences); // Output: { apple: 2, banana: 3, orange: 2 }

// 5. Flattening an array of arrays
const arrayOfArrays = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const flattenedArray = arrayOfArrays.reduce(
  (acc, curr) => acc.concat(curr),
  []
);
console.log("Flattened Array:", flattenedArray); // Output: [1, 2, 3, 4, 5, 6]
