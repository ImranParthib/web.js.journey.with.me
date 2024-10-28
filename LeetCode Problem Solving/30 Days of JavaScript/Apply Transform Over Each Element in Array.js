// /**
//  * @param {number[]} arr
//  * @param {Function} fn
//  * @return {number[]}
//  */
// var map = function (arr, fn) {
//     let newArray = [];
//     arr.forEach((element, index) => {
//         newArray.push(fn(element, index));
//     });
//     return newArray;
// };
// ?Given
arr = [1, 2, 3];
function plusone(n) {
  return n + 1;
}

// console.log(map([1, 2, 3, 4, 5], plusone)); // [2, 3, 4, 5, 6]

var map = function (arr, fn) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray.push(fn(arr[i], i));
  }
  return newArray;
};

let result = map(arr,plusone);
console.log(result);