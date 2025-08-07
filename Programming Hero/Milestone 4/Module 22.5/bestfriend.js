let bestFriend = [
  "Sajid",
  "sakib",
  "Jubayer Bin Rashid",
  "Kamal",
  "Jubayer Bin",
];

let longestName = bestFriend[0]; // Start with the first name as the longest

for (let i = 1; i < bestFriend.length; i++) {
  // Start loop from the second element
  if (bestFriend[i].length > longestName.length) {
    longestName = bestFriend[i]; // Update longestName if a longer name is found
  }
}

console.log(longestName); // Output the longest name
