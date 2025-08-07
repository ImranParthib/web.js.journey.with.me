function sum(num) {
  if (num == 0) {
    return 0;
  } else {
    return num + sum(num - 1);
  }
}

let result = sum(10);
console.log(result);
