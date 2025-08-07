const lowestValue = (myArray) => {
    let lowestValue = myArray[0];
    for (let i = 0; i < myArray.length; i++){
        if (lowestValue > myArray[i]) {
            lowestValue = myArray[i];
        }
       
    }
     return lowestValue;

};

let myArray = [23, 45, 67, 3, 56, 7, 8, 90];


let result = lowestValue(myArray);

console.log(result);
