function sumArrayElement(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++){
        let element = numbers[i];
        sum += numbers[i];
        console.log(i,element,sum);
    }
    return sum;
}

const numbers = [45, 65, 78, 12, 3, 54, 65];
sumArrayElement(numbers);

let sum = sumArrayElement(numbers);
console.log(sum);

