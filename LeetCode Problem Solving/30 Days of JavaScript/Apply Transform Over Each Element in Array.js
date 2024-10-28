/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
    let newArray = [];
    arr.forEach((element, index) => {
        newArray.push(fn(element, index));
    });
    return newArray;
};
