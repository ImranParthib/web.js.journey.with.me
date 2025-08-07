/* 
  # 217_arrayIncludes
  #Author: Imran Parthib
  #Time:8:47AM : March 23, 2025
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */

var containsDuplicate = function (nums) {

    //sort the array in ascending orders
    //This puts identical elements next to each other
    nums.sort((a, b) => a - b);
    //Loopt through the sorted array
    for (let i = 1; i < nums.length; i++) {
        //compare each elements with the previous element
        if (nums[i] == nums[i - 1]) {
            return true;
        }

    }
    // If we get through the entire array without finding duplicates, return false
    return false

};

//Sample array
const nums = [1, 2, 3, 4, 7, 89, 90];
//console log the output
console.log(containsDuplicate(nums))

