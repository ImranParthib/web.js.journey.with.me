/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var hasIncreasingSubarrays = function (nums: number[], k: number) {

    for (let i = 0; i <= nums.length - 2 * k; i++) {
        let firstSub = nums.slice(i, i + k);
        let secondSub = nums.slice(i + k, i + 2 * k);


        const isIncreasing = (arr: number[]) => arr.every((num, idx) => idx === 0 || num > arr[idx - 1]);

        if (isIncreasing(firstSub) && isIncreasing(secondSub)) {
            return true;
        }
    }
    return false;
};


let numbers: number[] = [2, 5, 7, 8, 9, 2, 3, 4, 3, 1];
let kn: number = 3;
hasIncreasingSubarrays(numbers, kn);