/**
 * !https://leetcode.com/problems/array-reduce-transformation/?envType=study-plan-v2&envId=30-days-of-javascript
 */

//  * @param {number[]} nums
//  * @param {Function} fn
//  * @param {number} init
//  * @return {number}
//  */
// var reduce = function(nums, fn, init) {

// };

/**
 * Example 1:
 * With Redudce function, we can sum all the elements in an array
 */

let nums = [1, 2, 3, 4];
function sum(accum, curr) {
  return accum + curr;
}
var reduce = function (nums, fn, init) {
    return nums.reduce(fn, init);
};

let result = reduce(nums, sum, 0);

console.log(result); // 10

/**
 * Example 1:
 * Without Redudce function, we can sum all the elements in an array
 */

let nums = [1, 2, 3, 4];
function sum(accum, curr) {
  return accum + curr;
}
var reduce = function (nums, fn, init) {
    let result = init;
    for (let i = 0; i < nums.length; i++) {
        result = fn(result, nums[i]);
    }
    return result;
};

let result = reduce(nums, sum, 0);

console.log(result); // 10