const summation = (num) => {
  if (num === 0) {
    return 0;
    }
  else {
      return num + summation(num - 1);
    }
};

const result = summation(15);
console.log(result);
