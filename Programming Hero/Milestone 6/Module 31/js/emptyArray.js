let array = [12, 45, 67];
while (array.length > 0) {
  array.pop();
}
console.log(array); // Output: []

while (array.length > 0) {
  array.shift();
}
console.log(array); // Output: []

// Using forEach

array.forEach(() => {
  array.shift();
});
console.log(array);
