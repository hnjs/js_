// Write a function that takes an (unsigned) integer as input, and returns the number 
// of bits that are equal to one in the binary representation of that number.
// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

var countBits = function(n) {
  n = n.toString(2);
  return Array.prototype.filter.call(n, function(digit) {
    return digit == 1;
  }).length;
};
