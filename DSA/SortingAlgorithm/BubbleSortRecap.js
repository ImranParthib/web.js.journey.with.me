function bubbleSort(arr, order = "asc") {
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - 1; j++) {
      if (
        (order === "asc" && arr[j] > arr[j + 1]) ||
        (order === "desc" && arr[j] < arr[j + 1])
      ) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

const arr = [12, 34, 56, 78, 80, 112, 555];

console.log(bubbleSort(arr, "asc")); // For ascending order
console.log(bubbleSort(arr, "desc")); // For descending order
