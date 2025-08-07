const generatePin = () => {
  const random = Math.random() * 10000;
  const pin = (random + "").split(".")[0];
  if (pin.length === 4) {
    return pin;
  } else {
    return generatePin();
  }
};

document.getElementById("generate-btn").addEventListener("click", function () {
  console.log("Button clicked");
  const pin = generatePin();
  const pinDisplay = document.getElementById("pin-display");
  pinDisplay.value = pin;
  pinDisplay.style.backgroundColor = "white";
});

document.getElementById("key-pad").addEventListener("click", function (event) {
  console.log(event.target.innerText);
  const number = event.target.innerText;
  const display = document.getElementById("typed-pin");
  if (isNaN(number)) {
    if (number === "C") {
      display.value = "";
    } else if (number === "<") {
      display.value = display.value.slice(0, -1);
    }
  } else {
    display.value = display.value + number;
  }
});

// Compare Pin

document.getElementById("submit-btn").addEventListener("click", function () {
  const pin = document.getElementById("pin-display").value;
  const typedPin = document.getElementById("typed-pin").value;
  const success = document.getElementById("success");
  const fail = document.getElementById("fail");
  const actionLeft = document.getElementById("action-left");
  let action = parseInt(actionLeft.innerText);
  action = action - 1;
  actionLeft.innerText = action;
  if (action === 0) {
    document.getElementById("submit-btn").disabled = true;
  }
  if (pin === typedPin) {
    success.style.display = "block";
    fail.style.display = "none";
    const pinDisplay = document.getElementById("pin-display");
    pinDisplay.style.backgroundColor = "#3d4153";
  } else {
    success.style.display = "none";
    fail.style.display = "block";
    const pinDisplay = document.getElementById("pin-display");
    pinDisplay.style.backgroundColor = "white";
  }
});
