/*
Create a function that takes a Roman numeral as its argument and returns its 
value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.

Modern Roman numerals are written by expressing each decimal digit of the number 
to be encoded separately, starting with the leftmost digit and skipping any 0s. 
So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" 
(2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

Example:

solution('XXI'); // should return 21
*/

function solution(roman){
  var ref = {M:1000, D:500, C:100, L:50, X:10, V:5, I:1};
  var prev = 0, curr, sum = 0;
  if (roman.length == 1) { return ref[roman[prev]];}
  for (var i=1; i<roman.length; i++) {
    curr = i;
    if (ref[roman[prev]] >= ref[roman[curr]]) {
      sum = sum + ref[roman[prev]];
      prev = i;
      if (prev == roman.length-1) {sum = sum + ref[roman[prev]];}
    }
    else {
      sum = sum + (ref[roman[curr]]-ref[roman[prev]]);
      prev = ++i;
    }
  }
  return sum;
}