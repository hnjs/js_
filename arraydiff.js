// difference function, which subtracts one list from another.
// it should remove all values from list a, which are present in list b

function array_diff(a, b) {
  return a.filter(function(item) {
      if (b.indexOf(item)==-1) {
          return true;
      }
      return false;
  });
}