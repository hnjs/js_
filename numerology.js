// In numerology, every number has a certain meaning that expresses someones connection to the universe! 
// This single digit integer can be calculated by adding up every digit in the birthdate: year, month, and date. 
// Each time the sum exceeds 10, add up the 2 digits.
// Input is a date object and ouput is sum of the digits.

function solution(date){
  var sum = date.getDate()+(date.getMonth()+1)+date.getFullYear();
  while (sum > 9) {sum = sum%10 + Math.floor(sum/10);}
  return sum;
}
