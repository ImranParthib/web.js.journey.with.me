// Problem 4: PublicBusFare
function publicBusFare(people) {
    let remainingPeople; // Properly scoped variable
    if (people <= 0) {
        return "Invalid input";
    }
  else if (people >= 50) {
    remainingPeople = people % 50;
    remainingPeople = remainingPeople % 11;
    return remainingPeople * 250;
  } else {
    return 0;
  }
}
console.log(publicBusFare(55)); //1250
