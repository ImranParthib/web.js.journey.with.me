/* 
  # 217_usingSets.js 
  #Author: Imran Parthib
  #Time:12:26AM : March 20, 2025
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */

var containsDuplicate = function (nums) {
  const set = new Set(nums)
  return set.size !== nums.length
  // if (set.size != nums.length) {
  //     return false
  // }
  // return true
};

const nums = [1, 2, 3, 1];

let newSet = new Set(nums);
console.log(newSet);

console.log(containsDuplicate(nums))

