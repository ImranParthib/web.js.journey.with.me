// Two Sum Using BruteForce Method

const twoSum = (num, target) => {
  let index = [];
  for (let i = 0; i < num.length; i++) {
    for (let j = i + 1; j < num.length; j++) {
      if (num[i] + num[j] == target) {
        index.push(i);
        index.push(j);
        return index;
      }
    }
  }
  return index;
};

let num = [2, 7, 11, 15];
let result = twoSum(num, 9);

console.log(result);  
