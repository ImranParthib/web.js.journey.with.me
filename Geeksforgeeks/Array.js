// Iteration using For loop
let array = [1, 2, 3, 4, 5, 6, 7];

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

// Iteration using While Loop
let j = 0;
let array2 = [1, 2, 3, 4, 5, 6, 7];

while (j < array.length) {
  console.log(array2[j]);
  j++;
}

// Iteration using forEach

let k = 0;

let array3 = ["Hello", "My", "Name", "Is", "Imran"];

array3.forEach(myFunction);

function myFunction(item, k) {
  console.log(item);
}
