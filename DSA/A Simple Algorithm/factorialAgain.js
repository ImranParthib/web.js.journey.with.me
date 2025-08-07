let result = 1;
for (let i = 1; i <= 5; i++) {
  result *= i;
}
console.log(result);

let arr = [10, 4, 5, 7];

function lowestValue(arr) {
    let lowest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < lowest) {
      lowest = arr[i];
      } 
    }
    return lowest;
}

let lowValue = lowestValue(arr);
console.log(lowValue);
