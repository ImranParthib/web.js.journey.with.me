/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function (...args) {
  // return args.length; complexity Object(1)
  let count = 0;
  for (const arg of args) {
    count++;
  }
  return count;
};

/**
 * argumentsLength(1, 2, 3); // 3
 */
