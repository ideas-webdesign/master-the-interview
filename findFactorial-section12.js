// return factorial of a number using iterative mode
function findFactorialIterative(number) {
  let answer = 1;
  if (number === 2) {
    answer = 2;
  } 
  for (let i = 2; i <= number; i++) {
    answer = answer * i    
  }
  return answer;
}

// return factorial of a number using recursion mode
function findFactorialRecursive(number) {
  if (number === 2) {
    return 2;
  }
  return number * findFactorialRecursive(number-1);
}

findFactorialRecursive(4)
// 4! = 4x3x2
// returns 24
