 //number of occurrences of an element in an array.

 Array.prototype.numOccurrences = function(item) {
  var offset = 0,
      count  = 0,
      pos    = this.indexOf(item, offset);
  while(pos != -1) {
    count++;
    offset = pos + 1;
    pos = this.indexOf(item, offset);
  }
  return count;
}