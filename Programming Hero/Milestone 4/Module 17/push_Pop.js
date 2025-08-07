let numbers = [1, 2, 3, 10];
// push add element at the end of the array
numbers.push(11);
let lastElement = numbers.pop();
console.log(lastElement);
// pop remove the last element of the array
let friends = ['Kabir', 'Rahim', 'Karim'];
friends.push('Jabir');
for (let i = 0; i<friends.length; i++) {
  console.log(friends[i]);
}
friends.pop();
console.log("======");
for (let i = 0; i<friends.length; i++) {
  console.log(friends[i]);
}

