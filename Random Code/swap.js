let a = 10;
let b = 20;
let c;
c = a;
a = b;
b = c;


console.log(a, b);

// using destructuring

[a, b] = [b, a]
console.log(a,b) //again back to previous 