/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var hasIncreasingSubarrays = function (nums, k) {

    for (let i = 0; i <= nums.length - 2 * k; i++) {
        let firstSub = nums.slice(i, i + k);
        let secondSub = nums.slice(i + k, i + 2 * k);


        const isIncreasing = (arr) => arr.every((num, idx) => idx === 0 || num > arr[idx - 1]);

        if (isIncreasing(firstSub) && isIncreasing(secondSub)) {
            return true;
        }
    }
    return false;
};



let nums = [2, 5, 7, 8, 9, 2, 3, 4, 3, 1];
let k = 3;

let result = hasIncreasingSubarrays(nums, k);
console.log(result);

