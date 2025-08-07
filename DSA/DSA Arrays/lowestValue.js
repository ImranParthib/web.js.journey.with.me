let myArray = [23, 45, 67, 3, 56, 7, 8, 90];
let lowestValue = myArray[0];

for (let i = 1; i < myArray.length; i++) {
  if (myArray[i] < lowestValue) {
    lowestValue = myArray[i];
  }
}

console.log(lowestValue);
