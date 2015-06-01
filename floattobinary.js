/*
implement a function called float2bin that converts a float number to the 
corresponding 32-bit binary value. This involves analysing each part of the 
input number and appointing each bit of the output accordingly.

Rules:

The conversion should match the IEEE754 Single precision 32-bit technical standard.
The implementation should be able to handle both Strings ("123", "1.23") and Numbers (123, 1.23) as input.
It should convert both positive and negative numbers.
The output should always be a 32 characters long string, so padding of 0's is necessary if input is not negative.
The point of this kata is to teach how floats are build on a binary level, so typed arrays are disabled.
Expectations and limitations:

The input is valid numbers or strings of numbers.
*/

function repeat(string, times) {
  var result = '';
  if (!times) return result;
  for (var i=0; i<times; i++) {result += string;}
  return result;
}

function binarify(n) {
  if (!n) return repeat('0', 32);
  var fArr = arrayfy(Math.abs(n));
  var bin = [];
  var e = 0;

  bin.push([1]);
  if (fArr[0].indexOf('1') != -1) {
    bin.push(fArr[0].slice(1).concat(fArr[1]));
  } else {
    bin.push(fArr[1].slice(fArr[1].indexOf('1')+1));
  }
  e = bin[1].length - fArr[1].length;
  return [bin, e];
}

function arrayfy(n) {
  n = n.toString(2).split('.');
  return [n[0].split(''), (!n[1]) ? ['0'] : n[1].split('')];
}

function float2bin(n) {
  var bin  = binarify(parseFloat(n)),
    sign = (n<0) ? '1' : '0',
    IEEE = [],
    exp  = (bin[1]+127).toString(2),
    mant = bin[0][1].slice(0,23);
  IEEE.push(sign);
  IEEE.push(repeat('0', 8 - exp.length) + exp);
  IEEE.push(mant.join('') + repeat('0', 23 - mant.length));

  return IEEE.join('');
}
