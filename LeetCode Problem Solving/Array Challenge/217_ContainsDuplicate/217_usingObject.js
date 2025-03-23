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
    // Create an empty object to track seen numbers
    const seen = {};

    // Loop through each number in the array
    for (let i = 0; i < nums.length; i++) {
        // Check if we've seen this number before
        if (seen[nums[i]] !== undefined) {
            // If we have seen it, we found a duplicate, return true
            return true;
        }

        // Mark this number as seen by adding it to our object
        seen[nums[i]] = true;
    }

    // If we get through the entire array without finding duplicates, return false
    return false;
};

const nums = [1, 2, 3, 1];
console.log(containsDuplicate(nums))

