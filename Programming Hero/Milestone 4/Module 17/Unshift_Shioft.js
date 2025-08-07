let numbers = [5, 6, 7, 8, 9, 10];
// unshift add element at the beginning of the array
numbers.unshift(0, 1, 2, 3, 4);
console.log("After unshift: ", numbers);

// shift remove the first element of the array
numbers.shift();
console.log("After shift: ", numbers);

// Multiple unshift
let limit = numbers.length;
for (let i = 0; i < limit; i++) {
  numbers.shift();
}
console.log("After Multiple shift: ", numbers);

//splice
// splice(start, deleteCount, item1, item2, item3, ...)
// start: The index at which to start changing the array.
// deleteCount: An integer indicating the number of old array elements to remove.
// item1, item2, ...: The elements to add to the array, beginning from start.
numbers = [5, 6, 7, 8, 9, 10];
// splice(start, deleteCount)
numbers.splice(2, 4);
console.log("After splice: ", numbers);
// splice(start, deleteCount, item1, item2, item3, ...)
//add 7, 8, 9, 10 at index 2        
numbers.splice(2, 0, 7, 8, 9, 10);
console.log("After splice: ", numbers);