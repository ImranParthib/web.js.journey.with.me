const finalResult = (callback, value, ...args) => {
  const addValue = callback(...args);
  console.log(addValue);
  const finalValue = addValue ** value;
  console.log(finalValue);
};

const addition = (a, b) => {
  return a + b;
};

finalResult(addition, 10, 2, 3); // Pass additional arguments for the addition function