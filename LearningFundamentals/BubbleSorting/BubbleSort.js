let myArray = [23, 1, 22, 45, 67, 7, 79];

const bubbleSort = (array) => {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
};

console.log("Unsorted", myArray);
bubbleSort(myArray);
console.log("Sorted", myArray);

let myArray2 = [23, 1, 22, 45, 67, 7, 79];

function BubbleSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] < array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
}
console.log("Unsorted Array: ", myArray2);
BubbleSort(myArray2);
console.log(" Descending Order: ", myArray2);
