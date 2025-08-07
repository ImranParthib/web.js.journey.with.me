
// Selection Sort is a simple sorting algorithm that works by repeatedly selecting the minimum element from the unsorted portion of the array and placing it at the beginning of the array.

// Time Complexity: O(n^2)
// Space Complexity: O(1)

// Selection Sort Algorithm
// 1. Find the minimum element in the array.
// 2. Swap the minimum element with the first element of the array.
// 3. Repeat the process for the remaining elements of the array.

// Selection Sort Implementation in JavaScript
function selectionSort(myArray) {
    let len = myArray.length;
    for (let i = 0; i < len; i++) {
        let min = i;
        for (let j = i + 1; j < len; j++) {
        if (myArray[min] > myArray[j]) {
            min = j;
        }
        }
        if (min !== i) {
        let tmp = myArray[i];
        myArray[i] = myArray[min];
        myArray[min] = tmp;
        }
    }
    return myArray;
}

// Example
const myArray = [64, 34, 25, 12, 22, 11, 90];
console.log(selectionSort(myArray)); // [11, 12, 22, 25, 34, 64, 90]

/*Example of Execution
Input: const myArray = [64, 34, 25, 12, 22, 11, 90];
Output: [11, 12, 22, 25, 34, 64, 90]
Detailed Steps for the Example:

First Pass (i = 0):

Find the minimum in [64, 34, 25, 12, 22, 11, 90]. The minimum is 11.
Swap 64 with 11: [11, 34, 25, 12, 22, 64, 90].
Second Pass (i = 1):

Find the minimum in [34, 25, 12, 22, 64, 90]. The minimum is 12.
Swap 34 with 12: [11, 12, 25, 34, 22, 64, 90].
Third Pass (i = 2):

Find the minimum in [25, 34, 22, 64, 90]. The minimum is 22.
Swap 25 with 22: [11, 12, 22, 34, 25, 64, 90].
Fourth Pass (i = 3):

Find the minimum in [34, 25, 64, 90]. The minimum is 25.
Swap 34 with 25: [11, 12, 22, 25, 34, 64, 90].
Fifth Pass (i = 4):

The remaining elements [34, 64, 90] are already in order.
Sixth Pass (i = 5):

The last element is also in place.*/