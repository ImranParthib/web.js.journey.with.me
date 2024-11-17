/**
 * *Autor: Imran Parthib
 * !Date: Sunday, November 17, 2024  9:28:07 PM
 */

// *Binary Search Algorithm

const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
};

let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let target = 8;
const result = binarySearch(myArray, target);
console.log(result);
// Output: 7
// Time Complexity: O(log n)
// Space Complexity: O(1)
