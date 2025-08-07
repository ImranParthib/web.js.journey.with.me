const family = {
  father: "John",
  mother: "Jane",
  son: "Jack",
  daughter: "Jill",
};

const { father, mother, son, daughter } = family;

const array = [father, mother, son, daughter];
console.log(array);
// ForEach Loop
array.forEach((element) => {
  console.log(element);
});

// For OF Loop
for (const element of array) {
  console.log(element);
}

// For IN Loop
for (const index in array) {
  console.log(index, array[index]);
}

// Map
array.map((element) => {
  console.log(element);
});

// For In Loop

for (const index in array) {
  console.log(array[index]);
}
