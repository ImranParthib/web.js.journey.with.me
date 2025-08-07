// Problem 5: IsBestFriend
const student1 = {
  id: 101,
  name: "abul",
  friend: "kabul",
};

const student2 = {
  id: 102,
  name: "kabul",
  friend: "abul",
};

function isBestFriend(student1, student2) {
  if (student1.friend === student2.name && student2.friend === student1.name) {
    return true;
  } else {
    return false;
  }
}

const bestFriend = isBestFriend(student1, student2);
console.log(bestFriend);

