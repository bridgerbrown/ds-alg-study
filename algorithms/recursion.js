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
