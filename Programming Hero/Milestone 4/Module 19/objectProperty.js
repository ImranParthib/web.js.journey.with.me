// Date: 2024-06-28 Friday
// JavaScript Object Property Access

const shoppingCart = {
  books: 3,
  sunglass: 1,
  keyboard: 5,
  mosue: 1,
  pen: 25,
};
console.log(shoppingCart);
// Accessing Object Properties using Dot Notation
let penCount = shoppingCart.pen;
console.log(penCount);
console.log(shoppingCart.pen);
// Accessing Object Properties using Array Notation
console.log(shoppingCart["pen"]);
// Accessing Object Properties using a Variable
let product = "keyboard";
let productCount = shoppingCart[product];
console.log(productCount);

// Accessing Object Properties using Object.keys()
let properties = Object.keys(shoppingCart);
// Accessing Object Values using Object.values()
let propertiesValues = Object.values(shoppingCart);
console.log(properties);
console.log(propertiesValues);

// Loop through an Object
for (const property in shoppingCart) {
  console.log(property);
}
// Loop through an Object and Accessing Object Properties
for (const property in shoppingCart) {
  console.log(property, shoppingCart[property]);
}
// Loop through an Object and Accessing Object Values
for (const property in shoppingCart) {
    console.log(shoppingCart[property]);
}
console.log("Hello Object");
// Loop through an Object and Accessing Object Properties 
Object.keys(shoppingCart).forEach((property) => {
    console.log(property);
});
// Loop through an Object and Accessing Object Properties and Values
Object.keys(shoppingCart).forEach((property) => {
    console.log(property, shoppingCart[property]);
});
// Loop through an Object and Accessing Object Values
Object.values(shoppingCart).forEach((value) => {
    console.log(value);
});
// Loop through an Object and Accessing Object Properties and Values
Object.entries(shoppingCart).forEach(([property, value]) => {
    console.log(property, value);
});
// Loop through an Object and Accessing Object Values
Object.entries(shoppingCart).forEach(([property, value]) => {
    console.log(value);
});
// Loop through an Object and Accessing Object Properties
Object.entries(shoppingCart).forEach(([property, value]) => {
    console.log(property);
});

// Add a New Property to an Object
shoppingCart.laptop = 2;
console.log(shoppingCart);
// Update an Existing Property of an Object
shoppingCart.pen = 30;
console.log(shoppingCart);
// Delete a Property from an Object
delete shoppingCart.pen;
console.log(shoppingCart);
// Check if a Property Exists in an Object
console.log("pen" in shoppingCart);
