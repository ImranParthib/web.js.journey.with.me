// Define a JavaScript object named 'product' with nested objects and arrays
const product = {
  laptop: "Asus Tuff15",
  phone: "iPhone",
  items: {
    list1: ["Table", "Chair", "Fan"],
    list2: ["Cable23", "Mouse", "Pad"],
  },
};

// Print the original JavaScript object
console.log("Original Object:");
console.log(product);

// Convert the JavaScript object to a JSON string
const jsonString = JSON.stringify(product);

// Print the JSON string
console.log("JSON String:");
console.log(jsonString);

// Parse the JSON string back into a JavaScript object
const jsObject = JSON.parse(jsonString);

// Print the parsed JavaScript object
console.log("Parsed Object:");
console.log(jsObject);
