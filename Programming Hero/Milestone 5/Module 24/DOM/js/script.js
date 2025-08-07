// Change the color and text of all <h1> elements
const allHeaders = document.getElementsByTagName("h1");
for (const header of allHeaders) {
  header.style.color = "red";
  header.textContent = "Let's Learn DOM";
}

// Arrays of friends and colors
const friends = ["John", "Jane", "Mike", "Emily"];
const colors = ["red", "green", "blue", "yellow"];

// Change the background color, padding, and text of all <li> elements
const listItems = document.getElementsByTagName("li");
for (let i = 0; i < listItems.length; i++) {
  listItems[i].style.backgroundColor = colors[i];
  listItems[i].style.padding = "10px";
  listItems[i].style.margin = "5px";
  listItems[i].textContent = friends[i];
}

// Change the background color, padding, and text of all <li> elements for mobile devices
if (window.innerWidth <= 768) {
  for (let i = 0; i < listItems.length; i++) {
    listItems[i].style.backgroundColor = colors[i];
    listItems[i].style.width = "70px";
    listItems[i].textContent = friends[i];
    listItems[i].style.borderRadius = "10px";
  }
}

const h2 = document.querySelectorAll("h2");

for (const header of h2) {
  header.classList.add("color");
}

const newLi = document.createElement("li");
newLi.textContent = "Rakib";
document.querySelector("ul").appendChild(newLi);

// Create a new section after the Shopping list section
const newSection = document.createElement("section");
newSection.id = "new-section";

// Insert the new section after the Shopping list section
const shoppingListSection = document.getElementById("item-list");
shoppingListSection.insertAdjacentElement("afterend", newSection);

newSection.style.backgroundColor = "lightblue";
newSection.style.fontSize = "26px";

const img = document.createElement("img");
img.src =
  "https://media.licdn.com/dms/image/D5622AQEZP4HuFXGNDw/feedshare-shrink_800/0/1695801323000?e=2147483647&v=beta&t=b_lTOSRIi3mscHYu1b0K-JRvldAT4Mj4sJT0ufpvOvU";
img.alt = "Random Image";
img.style.width = "100%";
img.style.height = "500px";
newSection.appendChild(img);

if (window.innerWidth <= 768) {
  img.style.height = "200px";
}
