// let x = 2;
// let y = 3;
// let z = 1;

// function minimum(x, y, z) {
//     if (x < y && x < z) {
//         console.log(x);
//     } else if (y < x && y < z) {
//         console.log(y);
//     } else {
//         console.log(z);
//     }
// }

// minimum(x, y, z);
// ?Print the minimum
// !Rectify the given code to print the smallest among them.

// let x = 2;
// let y = 3;
// let z = 1;

// if (x < y) {
//   if (x < z) {
//     console.log(x);
//   } else {
//     if (y > z) {
//       console.log(y);
//     } else {
//       console.log(z);
//     }
//   }
// } else {
//   if (y < z) {
//     console.log(y);
//   } else {
//     if (x < z) {
//       console.log(x);
//     } else {
//       console.log(z);
//     }
//   }
// }

let x = 2;
let y = 3;
let z = 1;

if (x < y) {
  if (x < z) {
    console.log(x);
  } else {
    if (y < z) {
      console.log(y);
    } else {
      console.log(z);
    }
  }
} else {
  if (y < z) {
    console.log(y);
  } else {
    if (x < z) {
      console.log(x);
    } else {
      console.log(z);
    }
  }
}
