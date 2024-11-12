// Get the elements
const firstNumber = document.getElementById("FirstNumber");
const secondNumber = document.getElementById("SecondNumber");
const resultButton = document.getElementById("Result");

// Get the operation buttons
const plusButton = document.getElementById("plus");
const minusButton = document.getElementById("minus");
const multiplyButton = document.getElementById("multiply");
const divideButton = document.getElementById("divide");

// Add event listeners to the buttons
plusButton.addEventListener("click", () => performOperation("+"));
minusButton.addEventListener("click", () => performOperation("-"));
multiplyButton.addEventListener("click", () => performOperation("x"));
divideButton.addEventListener("click", () => performOperation("/"));

function performOperation(operator) {
  let result;
  const num1 = Number(firstNumber.value);
  const num2 = Number(secondNumber.value);

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "x":
      result = num1 * num2;
      break;
    case "/":
      if (num2 !== 0) {
        result = num1 / num2;
      } else {
        alert("Cannot divide by zero");
        return;
      }
      break;
  }

  resultButton.textContent = result;
}
