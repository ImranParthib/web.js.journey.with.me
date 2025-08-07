const updateWidthdrawTotal = () => {
  const withdrawInput = getInputValue("withdraw-input");
  const preWithdrawValue = getpreValue("withdraw-total");

  const preBalance = getpreValue("balance-total");
  if (withdrawInput > preBalance) {
    alert("Please enter a valid amount.");
  } else {
    const totalWithdraw = withdrawInput + preWithdrawValue;
    document.getElementById("withdraw-total").innerText = totalWithdraw;
    const balanceTotal = preBalance - withdrawInput;
    document.getElementById("balance-total").innerText = balanceTotal;
  }
};

document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    console.log("Withdraw button clicked");
    updateWidthdrawTotal();
  });
