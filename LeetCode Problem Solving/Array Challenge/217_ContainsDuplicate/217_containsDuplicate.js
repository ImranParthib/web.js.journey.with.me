/*
  # 217_usingSets.js 
  #Author: Imran Parthib
  #Time:12:26AM : March 20, 2025

 * This is a simple problem that can be solved using brute force.
 * Pros: The solution is simple and easy to understand.
 * Cons: The time complexity of this solution is O(n^2) which is not efficient.
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */

var containsDuplicate = function (nums) {
    let n = nums.length;
    let count = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (nums[i] == nums[j]) {
                count++;
            }
        }
    }
    if (count > n) {
        return true;
    }
    else {
        return false;
    }
};
const nums = [1, 2, 3, 1];
console.log(containsDuplicate(nums))

