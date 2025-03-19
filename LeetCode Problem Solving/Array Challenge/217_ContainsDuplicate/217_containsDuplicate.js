/**
 * There is a time complexity here when the arrau of nums will be long
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

