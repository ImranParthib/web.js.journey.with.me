const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a number: ', (num) => {
    function Factorial(num) {
        let facOfNum = 1; // Initialize to 1 for multiplication
        for (let i = 1; i <= num; i++) { // Loop condition should include num
                facOfNum *= i;
        }
        console.log(facOfNum);
    }

    Factorial(parseInt(num));

    rl.close();
});
 
