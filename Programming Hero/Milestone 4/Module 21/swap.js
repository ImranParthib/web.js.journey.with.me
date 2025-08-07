// 1. Using a Temporary Variable
let num1 = 25;
let num2 = 50;
let temp = num1;
num1 = num2;
num2 = temp;
console.log(num1, num2); // Output: 50 25

// 2. Using Array Destructuring
let a = 25;
let b = 50;
[a, b] = [b, a];
console.log(a, b); // Output: 50 25

// 3. Using Arithmetic Operations
let x = 60;
let y = 30;
x = x + y;
y = x - y;
x = x - y;
console.log(x, y); // Output: 30 60

// 4. Using Bitwise XOR Operation
let p = 40;
let q = 80;
p = p ^ q;
q = p ^ q;
p = p ^ q;
console.log(p, q); // Output: 80 40

// 5. Using ES6 Destructuring Assignment (Arrays)
let m = 100;
let n = 200;
[m, n] = [n, m];
console.log(m, n); // Output: 200 100

// 6. Using ES6 Destructuring Assignment (Objects)
let obj = { x: 300, y: 400 };
({ x: obj.y, y: obj.x } = obj);
console.log(obj.x, obj.y); // Output: 400 300

// 7. Using ES6 Destructuring Assignment with Objects (No Temporary Variable)
let obj1 = { p: 500, q: 600 };
[obj1.q, obj1.p] = [obj1.p, obj1.q];
console.log(obj1.p, obj1.q); // Output: 600 500

// 8. Using ES6 Destructuring Assignment with Objects and Rest Syntax
let { s, t, ...rest } = { s: 700, t: 800, u: 900 };
s = rest.t;
t = rest.s;
console.log(s, t); // Output: 800 700

// 9. Using ES6 Destructuring Assignment with Objects and Rest Syntax (No Temporary Variable)
let { u, v, ...rest1 } = { u: 1000, v: 1100, w: 1200 };
[u, v] = [rest1.v, rest1.u];
console.log(u, v); // Output: 1100 1000

// 10. Using ES6 Destructuring Assignment with Objects and Rest Syntax with Default Values
let {
  x1,
  y1,
  z1 = 1300,
  ...rest2
} = { x1: 1400, y1: 1500, z1: 1600, w1: 1700 };
[x1, y1] = [rest2.y1, rest2.x1];
console.log(x1, y1); // Output: 1500 1400

// 11. Using ES6 Destructuring Assignment with Objects and Rest Syntax with Default Values (No Temporary Variable)
let {
  x2,
  y2,
  z2 = 1800,
  ...rest3
} = { x2: 1900, y2: 2000, z2: 2100, w2: 2200 };
[x2, y2] = [rest3.y2, rest3.x2];
console.log(x2, y2); // Output: 2000 1900
