// Utilities Function
const getInputValue = (inputid) => {
  const inputElement = document.getElementById(inputid);
  if (!inputElement) {
    console.error(`Element with id ${inputid} not found`);
    return 0;
  }
  const inputValue = inputElement.value;
  const inputValueNum = parseFloat(inputValue);
  inputElement.value = ""; // Clear the input field after getting the value
  return isNaN(inputValueNum) ? 0 : inputValueNum;
};

const getTextValue = (textid) => {
  const textElement = document.getElementById(textid);
  if (!textElement) {
    console.error(`Element with id ${textid} not found`);
    return 0;
  }
  const textValue = textElement.innerText;
  const textValueNum = parseFloat(textValue);
  return isNaN(textValueNum) ? 0 : textValueNum;
};

const Addition = () => {
  const depositInput = getInputValue("deposit-input");
  const preDeposit = getTextValue("deposit-total");
  const preBalance = getTextValue("balance-total");
  const newDeposit = depositInput + preDeposit;
  const newBalance = depositInput + preBalance;
  document.getElementById("deposit-total").innerText = newDeposit;
  document.getElementById("balance-total").innerText = newBalance;
};

const withdraw = () => {
  const withdrawInput = getInputValue("withdraw-input");
  const preWithdraw = getTextValue("withdraw-total");
  const preBalance = getTextValue("balance-total");
  if (preBalance < withdrawInput) {
    showModal("You don't have enough balance");
    return;
  }
  const newWithdraw = withdrawInput + preWithdraw;
  const newBalance = preBalance - withdrawInput;
  document.getElementById("withdraw-total").innerText = newWithdraw;
  document.getElementById("balance-total").innerText = newBalance;
};

document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    console.log("Deposit button clicked");
    Addition();
  });

document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    console.log("Withdraw button clicked");
    withdraw();
  });

// Modal Functions
const showModal = (message) => {
  const modal = document.getElementById("custom-alert");
  const modalMessage = document.getElementById("modal-message");
  modalMessage.innerText = message;
  modal.classList.remove("hidden");
};

const closeModal = () => {
  const modal = document.getElementById("custom-alert");
  modal.classList.add("hidden");
};

// Close the modal when the user clicks anywhere outside of the modal
window.onclick = function (event) {
  const modal = document.getElementById("custom-alert");
  if (event.target == modal) {
    modal.classList.add("hidden");
  }
};
