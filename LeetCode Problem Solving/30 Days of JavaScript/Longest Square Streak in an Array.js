/**
 * @param {number[]} nums
 * @return {number}
 */

let nums = [4, 3, 6, 16, 8, 2];
var longestSquareStreak = function (nums) {
    let max = 0;
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (Math.sqrt(nums[i]) % 1 === 0) {
        count++;
        max = Math.max(max, count);
        } else {
        count = 0;
        }
    }
    return max;
};

let res = longestSquareStreak(nums);
console.log(res);
