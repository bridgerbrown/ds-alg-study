let count = 0;

function inception() {
  console.log(counter);
  if (count > 3) {
    return 'done';
  }
  count++;
  return inception(); // Have to do this to actually get "done"
}

inception();


function findFactorialRecursive(number) {
  if (number === 2) return 2;
  return number * findFactorialRecursive(number - 1);
} // O(n)

function findFactorialIterative(number) {
  let answer = 1;
  if (number === 2) answer = 2;
  for (let i = 2; i <= number; i++) {
    answer = answer * i;
  }
  return answer;
} // O(n)

/*
 * Exercise: Fibonacci
*/

function fibonacciIterative(n) {
  let arr = [0, 1];
  for (let i = 2; i < n + 1; i++) {
    arr.pusharr[i - 2] + arr[i - 1];
  }
  return arr[n];
} // O(n)
fibonacciIterative(3);

function fibonacciRecursive(n) {
  if (n < 2) return n;
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
} // O(2^n) exponential, much worse than iterative
fibonacciRecursive(3);


