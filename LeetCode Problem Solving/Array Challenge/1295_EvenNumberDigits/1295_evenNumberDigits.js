/* 
  # 217_evenNumberDigits
  #Author: Imran Parthib
  #Time:9:04AM : March 23, 2025
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

var findNumbers = function (nums) {
    //let even number of digits are zero
    let evenDigits = 0;
    //Loopt through all the element of the array
    for (let i = 0; i < nums.length; i++) {

        //converts numbers to string to count its digits
        const digitCount = nums[i].toString().length;
        //check if the number of digits is even 
        if (digitCount % 2 === 0) {
            evenDigits++;
        }
    }
    return evenDigits;

};

const nums = [12, 345, 2, 6, 7896];
console.log(findNumbers(nums));