/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
  return function (...args) {
    if (!this.cache) {
      this.cache = {};
    }
    const key = JSON.stringify(args);
    if (!this.cache[key]) {
      this.cache[key] = fn.apply(this, args);
    }
    return this.cache[key];

  };
}

/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */
