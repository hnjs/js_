// Author		: Harish Narayanan
// Date 		: 15 May 2015
// Description 	: Code to convert number to words

function Wordify (num) {
	if (isNaN(num)) {
		throw "Invalid input. Numbers only";
	}
	var t = num.toString().split(".");
	this.intValue = t[0]||0;
	this.decValue = t[1]||0;
}

// convert the number into an array, where each element is a group of 'size' digits 
Wordify.prototype.digitGrouping = function(size) {
	var group 	= [],
		n 		= this.intValue,
		divisor = Math.pow(10, size);

	while (n > 0) {
		group[group.length] = n % divisor;
		n = Math.floor(n / divisor);
	}
	return group.reverse();
}

function writeSentence(myArray){
	var ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
	var teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
	var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
	var scales = [
						'', 'thousand', 
						'million', 'billion', 'trillion', 'quadrillion', 'quintillion', 
						'sextillion', 'septillion', 'octillion', 'nonillion', 'decillion'
					];
	
	function digitToWords(n) {
		var line = "";
		if (isNaN(n) || n > 999) { return null; }

		if (n == 0) { line = ""; }
		else if (n < 10) { line = ones[n]; }
		else if (n < 20) { line = teens[n % 10]; }
		else if (n < 100) { line = tens[Math.floor(n / 10)] + " " + ones[n % 10]; }
		else { line = ones[Math.floor(n / 100)] + " hundred " + digitToWords(n % 100); }

		return line.trim();
	}

	myArray.reverse();

	return myArray.reduce(function(accumulator, item, index, arr){
		var word = digitToWords(item);
		if (word) {
			accumulator = word + " " + scales[index] + " " + accumulator;	
			//if (index == 0 && word.indexOf("and")<0) { accumulator = "and " + accumulator; }
		}
		return accumulator;
	},"").trim();
}


var number = new Wordify(998720047200400);
console.log("The input number is " + number.intValue);
console.log(writeSentence(number.digitGrouping(3)));
