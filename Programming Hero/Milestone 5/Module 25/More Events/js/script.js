const h1 = document.createElement("h1");
h1.innerText = "This is a new h1";
document.getElementById("text-field").before(h1);

const body = document.body.style;
body.backgroundColor = "lightblue";
body.color = "black";
body.textAlign = "center";
body.fontSize = "20px";
body.padding = "20px";
body.margin = "0";
body.display = "flex";
body.justifyContent = "center";
body.alignItems = "center";
body.flexDirection = "column";
body.height = "100vh";
body.width = "100vw";
body.overflow = "hidden";

const textField = document.getElementById("text-field").style;
textField.width = "300px";
textField.height = "50px";
textField.fontSize = "20px";
textField.border = "none";
textField.outline = "none";
textField.borderRadius = "5px";
textField.padding = "10px";
textField.margin = "10px";
textField.boxShadow = "0 0 10px gray";
textField.backgroundColor = "lightgreen";
textField.color = "black";
textField.textAlign = "center";
textField.fontFamily = "Arial";

const h1Style = document.querySelector("h1").style;
h1Style.color = "blue";
h1Style.fontSize = "30px";
h1Style.fontFamily = "Arial";
h1Style.margin = "10px";
h1Style.textAlign = "center";
h1Style.fontWeight = "bold";

const p = document.createElement("p");
p.innerText = "Type Delete to Delete the h1";
document.getElementById("text-field").after(p);

p.style.color = "red";

const button = document.createElement("button");
button.innerText = "Delete";
document.getElementById("text-field").after(button);
button.style.color = "white";
button.style.backgroundColor = "Red";
button.style.border = "none";
button.style.outline = "none";
button.style.borderRadius = "5px";
button.style.padding = "7px";

button.style.boxShadow = "0 0 10px gray";
button.style.cursor = "pointer";

document
  .getElementById("text-field")
  .addEventListener("input", function (event) {
    if (event.target.value === "Delete") {
      button.addEventListener("click", function () {
        h1.remove();
        p.remove();
        document.getElementById("text-field").value = "";
      });
    }
  });
document.getElementById("text-field").value = "";

 
