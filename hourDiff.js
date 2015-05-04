// Code snippet to calculate the difference between 2 inputs of time in hh:mm 24hrs format
// Author: Harish Narayanan
// Date: 04-May-2015

function getHourDiff(a, b) {
	if (!isValidHour(a) || !isValidHour(b)) {
		return "Invalid input(s)";
	}

	var h1 = a.split(":"), h2 = b.split(":");
	var h = 0, m = 0;
	h = h1[0] - h2[0];
	m = h1[1] - h2[1];

	if (h < 0) {
		h = -h; 
		m = -m;
	}
	if (h == 0) {
		m = Math.abs(m);
	}
	if (m < 0) {
		m = m + 60;
		h = h - 1;
	}

	return h+":"+m;
}

function isValidHour(hour) {
	hourPattern = "^([01]?[0-9]|2[0-3]):[0-5][0-9]$";
	if (hour.match(hourPattern)) {return true;}
	return false;
}
