document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".p-6");
  const result = document.getElementById("result");
  const highlight = document.getElementById("highlight");

  let currentInput = "";
  let memory = 0;

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const value = button.value;

      switch (value) {
        case "AC":
          currentInput = "";
          highlight.innerText = "";
          result.innerText = "0";
          break;
        case "C":
          currentInput = currentInput.slice(0, -1);
          result.innerText = currentInput || "0";
          break;
        case "=":
          try {
            highlight.innerText = currentInput;
            currentInput = eval(currentInput).toString();
            result.innerText = currentInput;
          } catch (error) {
            result.innerText = "Error";
            currentInput = "";
          }
          break;
        case "M+":
          memory += parseFloat(result.innerText) || 0;
          break;
        default:
          if ("0123456789.".includes(value)) {
            if (value === "." && currentInput.includes(".")) return;
            currentInput += value;
          } else {
            currentInput += ` ${value} `;
          }
          result.innerText = currentInput;
          break;
      }
    });
  });
});
