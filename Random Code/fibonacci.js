const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Prompt the user for the radius of the circle
rl.question('Enter the radius of the circle: ', function(radius) {
  // Close the readline interface
  rl.close();


  

  // Convert the input to a number
  const radiusNumber = parseFloat(radius);

  // Check if the input is a valid number
  if (isNaN(radiusNumber)) {
    console.log('Invalid input. Please enter a valid number.');
  } else {
    // Calculate the area of the circle
    const area = Math.PI * Math.pow(radiusNumber, 2);

    // Display the result
    console.log(`The area of the circle with radius ${radiusNumber} is: ${area.toFixed(2)}`);
  }
});
