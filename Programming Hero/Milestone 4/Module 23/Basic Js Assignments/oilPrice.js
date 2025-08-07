//Problem 3: OilPrice
function oilPrice(diesel, petrol, octane) {
  if (diesel < 0 || petrol < 0 || octane < 0) {
    return "Please enter valid number";
  }
  let total = diesel * 114 + petrol * 130 + octane * 135;
  return total;
}

const totalOilPrice = oilPrice(30, 20, 10);
console.log(totalOilPrice);