// /**
//  * @param {number[]} arr
//  * @param {Function} fn
//  * @return {number[]}
//  */

// ?Example 1:

// var filter = function (arr, fn) {};
// arr = [0, 10, 20, 30];
// function greaterThan10(n) {
//   return n > 10;
// }

// var filter = function (arr, fn) {
//     let newArray = [];
//     arr.forEach(element => {
//         if (fn(element)) {
//             newArray.push(element);
//         }
//     });
//     return newArray;
// };

// let res = filter(arr, greaterThan10);
// console.log(res);

//? Example 2:

/**
 * Input: arr = [1,2,3], fn = function firstIndex(n, i) { return i === 0; }
 *!Output: [1]
 *?Explanation:
 *fn can also accept the index of each element
 **In this case, the function removes elements not at index 0
 */

// let arr = [1, 2, 3];
// function firstIndex(n, i) {
//   return i === 0;
// }

// var filter = function (arr, fn) {
//   let filteredArr = [];
//   arr.forEach((element, index) => {
//     if (fn(element, index)) {
//       filteredArr.push(element);
//     }
//   });
//   return filteredArr;
// };

// let res = filter(arr, firstIndex);
// console.log(res); // [1]

/** 
 * !Example 3:

**Input: arr = [-2,-1,0,1,2], fn = function plusOne(n) { return n + 1 }
*Output: [-2,0,1,2]
*Explanation:
*?Falsey values such as 0 should be filtered out
*/

let arr = [-2, -1, 0, 1, 2];
function plusOne(n) {
  return n + 1;
}
var filter = function (arr, fn) {
  let filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
};

let res = filter(arr, plusOne);
console.log(res);
