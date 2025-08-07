const itmes = [
  { name: "samsung s5", price: 45000, quantity: 1 },
  { name: "asus laptop", price: 80000, quantity: 1 },
  { name: "apple smart watch", price: 25000, quantity: 1 },
  { name: "bosundhara binding paper", price: 100, quantity: 5 },
  { name: "lg smart phone", price: 15000, quantity: 1 },
];

function calculatePrice(items) {
  let totalPrice = 0; // Step 1: Initialize a return variable

  // Example logic that might otherwise use multiple return statements
  if (!items || items.length === 0) {
    totalPrice = 0; // Step 2: Assign value based on a condition
  } else {
    for (const item of items) {
      totalPrice += item.price * item.quantity;
    }
  }

  return totalPrice; // Step 3: Return the variable at the end
}

const totalPrice = calculatePrice(itmes);
console.log(totalPrice);