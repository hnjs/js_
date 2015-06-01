/*
Make a program that checks a string for correct grouping. For instance, the following groups are done correctly:
({})
[[]()]
[{()}]

The next are done incorrectly
{(})
([]
[])
*/

function groupCheck(input) {
  var prevPos, currPos;
  var pat = {'{': '}', '(': ')', '[':']'};
  input = input.split("");
  for (var i=1; i<input.length; i++) {
    prevPos = i-1;
    currPos = i;
    if (input[currPos] === pat[input[prevPos]]) {
      var temp = input.splice(prevPos, 2);
      i = prevPos-1;
    }
  }
  if (!input.length) return true;
  return false;
}
