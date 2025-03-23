/* 
  # 217_arrayIncludes
  #Author: Imran Parthib
  #Time:8:55AM : March 23, 2025
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */

var containsDuplicate = function (nums) {

    //Loop through each element in the array
    for (let i = 0; i < nums.length; i++) {
        //For each element,check all subsequent elements
        //Start from i+1 to avoid comparing with itself and previously checked elements 
        for (j = i + 1; j < nums.length; j++) {
            // Compare the current element with another element
            if (nums[i] === nums[j]) {
                //ef the're equal, we found a duplicate, return true
                return true;
            }
        }

    }
    //If we get through all the comparisons without finding duplications, return false
    return false;

};

//Sample array
const nums = [1, 2, 3, 4, 7, 89, 90];
//console log the output
console.log(containsDuplicate(nums))

