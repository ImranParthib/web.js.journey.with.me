const getInputValue = (inputId) => {
  const depositInput = document.getElementById(inputId);
  const depositAmountText = depositInput.value;
  const depositAmount = parseFloat(depositAmountText);

  // Check if the value is a valid number
  if (isNaN(depositAmount) || depositAmount <= 0) {
    showAlert("Please enter a valid amount.");
    depositInput.value = "";
    return 0;
  }

  depositInput.value = "";
  return depositAmount;
};

const getpreValue = (preValueId) => {
  const depositInput = document.getElementById(preValueId);
  const depositAmountText = depositInput.innerText;
  const depositAmount = parseFloat(depositAmountText);
  return isNaN(depositAmount) ? 0 : depositAmount;
};

const updateTotalField = () => {
  const inputValue = getInputValue("deposit-input");
  if (inputValue === 0) return; // Do not update if the input value is invalid

  const preValue = getpreValue("deposit-total");
  const total = inputValue + preValue;
  document.getElementById("deposit-total").innerText = total;

  const preBalance = getpreValue("balance-total");
  const balanceTotal = preBalance + inputValue;
  document.getElementById("balance-total").innerText = balanceTotal;
};

document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    //console.log("Deposit button clicked");
    updateTotalField();
  });

const showAlert = (message) => {
  const alertModal = document.getElementById("custom-alert");
  const alertMessage = document.getElementById("alert-message");
  alertMessage.textContent = message;
  alertModal.classList.remove("hidden");

  const closeButton = document.getElementById("alert-close-button");
  closeButton.addEventListener("click", function () {
    alertModal.classList.add("hidden");
  });
};
