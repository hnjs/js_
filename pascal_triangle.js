// Generates a pascal triangle and returns an array of arrays.

function pascal(depth) {
  var sequence = []
	for (var i=1; i<=depth; i++) {
		var row = [];
		for (var j=0; j<i; j++) {
			row.push((j==0 || j==i-1) ? 1 : sequence[i-2][j-1] + sequence[i-2][j]);
		}
		sequence.push(row)
	}
	return sequence;
}
