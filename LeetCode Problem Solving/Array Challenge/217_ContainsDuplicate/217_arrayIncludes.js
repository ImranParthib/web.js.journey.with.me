/* 
  # 217_arrayIncludes
  #Author: Imran Parthib
  #Time:8:34AM : March 23, 2025
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */

var containsDuplicate = function (nums) {
    // create a empty array to store number we've seen 
    const seen = [];

    //Loop through each number in the input array
    for (let i = 0; i < nums.length; i++) {
        if (seen.includes(nums[i])) {
            return true;
        }

        //Add the current number to our seen array
        seen.push(nums[i]);
    }
    //If we get through the entire array without finding duplicates, return false
    return false;

};

const nums = [1, 2, 3, 1,7,89,90];
console.log(containsDuplicate(nums))

