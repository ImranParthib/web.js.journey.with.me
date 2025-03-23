/* 
  # 217_usingObject/HashMap 
  #Author: Imran Parthib
  #Time:8:32AM : March 23, 2025
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */

var containsDuplicate = function (nums) {

    const seen = {}

    for (let i = 0; i < nums.length; i++) {
        if (seen[nums[i]] !== undefined) {
            return true
        }

        seen[nums[i]] = true;
    }
    return false

};

const nums = [1, 2, 3, 1];
console.log(containsDuplicate(nums))

