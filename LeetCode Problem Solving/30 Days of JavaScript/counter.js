var createCounter = function (n) {
  return function () {
    let result = n;
    n = n + 1;
    return result;
  };
};
