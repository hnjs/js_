/* Write a method that takes a maximum bound and returns all primes starting with 0 up-to and including the maximum bound.

For example: prime(11);

Should return an array that looks like this: [2,3,5,7,11]

*/

function prime(num) {
  var primeNum = [];
  for (var i=0; i<=num; i++) {
    if (isPrime(i)) primeNum.push(i);
  }
  return primeNum;
}

function isPrime(n) {
  if ((n < 2) || (n > 2 && n%2==0)) return false;
  for (i=3; i<n; i+=2)
  {
    if (n%i == 0) return false;
  }
  return true;
}