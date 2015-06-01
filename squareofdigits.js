// square every digit of a number.
// For example, if we run 9119 through the function, 811181 will come out.
// Note: The function accepts an integer and returns an integer

function squareDigits(num){
  var n = num.toString().split('');
  return Number(n.reduce(function(sq, digit){
    return sq + (digit*digit);
  }, ""));
}