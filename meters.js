// takes a number of meters, and outputs it using metric prefixes
function meters(x) {
	var scale = ['m', 'Km', 'Mm', 'Gm', 'Tm', 'Pm', 'Em', 'Zm', 'Ym'],
		scaleIndex = 0,
		result = x;

	while (result > 999) {
		scaleIndex++;
		result = result/1e3;
	}

	return result + scale[scaleIndex];
}