const list = [1, 2, 4, 5, 6, 7, 89, 89, 90,90, 90, 90];
const duplicates = list.filter((item, index) => list.indexOf(item) !== index && list.lastIndexOf(item) === index);
console.log(duplicates); // Output: [89]
