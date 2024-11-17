const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
};

let myArray = [23, 45, 8, 9, 1, 2, 4, 56, 786, 43, 2, 34, 6, 7];
const sortedArray = bubbleSort(myArray);
console.log(sortedArray);
