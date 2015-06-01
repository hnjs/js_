// code that returns all of the sublists of a list or Array

function powerset(s) {
  return s.reduce( function(p, e) {
      return p.concat( p.map ( function(sub) { 
        return sub.concat([e]);}));
    }, [[]]).join("\n");
}