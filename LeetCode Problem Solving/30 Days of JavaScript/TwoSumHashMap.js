// using Hash Map to solve Two Sum problem

const twoSum = (num, target) => {
  let map = new Map();
  for (let i = 0; i < num.length; i++) {
    let complement = target - num[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(num[i], i);
  }
  return [];
};

let num = [2, 7, 11, 15];
let result = twoSum(num, 9);

console.log(result);
