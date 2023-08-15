// Caching and Memoization
function addTo80(n) {
  return n + 80;
}

function memoizedAddTo80() {
  let cache = {}; // closure, avoiding global scope memory
  return function(n) {
    if (n in cache) {
      return cache[n];
    } else {
      cache[n] = n + 80;
      return cache[n];
    }
  }
}

const memoized = memoizedAddTo80();

// Caching with Fibonacci

function fibonacci(n) {
  if (n < 2) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
} // O(2^n) time, really bad
fibonacci(50); // will crash browser

function fibonacciMemoized() {
  let cache = {};
  return function fib(n) {
    if (n in cache) {
      return cache[n];
    } else {
      if (n < 2) {
        return n;
      } else {
        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
      }
    }
  }
} // O(n) time, much better
fibonacciMemoized(50);
