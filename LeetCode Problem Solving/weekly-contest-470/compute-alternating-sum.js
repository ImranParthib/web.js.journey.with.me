/**
 * @param {number[]} nums
 * @return {number}
 */
var alternatingSum = function (nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i % 2 != 0) {
            sum -= nums[i];
        }
        if (i % 2 == 0) {
            sum += nums[i];
        }
    }
    return sum;

};
const nums = [1, 3, 5, 7];

const result = alternatingSum(nums);

console.log(result);