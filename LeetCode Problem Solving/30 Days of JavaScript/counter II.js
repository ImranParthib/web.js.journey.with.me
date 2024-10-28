/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
  let current = init;

  function increment() {
    return ++current;
  }
  function decrement() {
    return --current;
  }
  function reset() {
    current = init;
    return current;
  }

  return {
    increment: increment,
    decrement: decrement,
    reset: reset,
  };
};

// Example usage:
const counter = createCounter(5);
console.log(counter.increment()); // 6
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4
