const numbers = [6, 78, 8, 1, 23, 45, 56, 78, 89];

numbers.map((num) => {
  console.log(num);
});

let num = [2, 4, 6, 8];
let newNum = num.map((n) => {
  return n * 2;
});
console.log(newNum);
newNum.map((n) => console.log(n));

const products = [
  { name: "laptop", price: 43000 },

  { name: "watch", price: 3680 },

  { name: "phone", price: 55000 },
];


products.forEach((product) => {
    console.log(product.name);
});
    


const items = products.map((product) =>  product.name);
     
console.log(items);