// Fibonnaci exercice
// Given a number N return the index valur of the Fibonnaci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233,

// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 -> 2+3

function fibonnaciRecursive(n) {
  if(n < 2) {
    return n;
  }
  return fibonnaciRecursive(n-1) + fibonnaciRecursive(n-2);
}

//fibonnaciRecursive(3);

function fibonnaciIterative(n) {
  var arr=[0,1]
  for (let i = 2; i < n+1; i++) {
    arr.push(arr[i-2] + arr[i-1]);
  }
  return arr[n]
}

fibonnaciIterative(8);
// returns 21, because, 8+13 = 21
