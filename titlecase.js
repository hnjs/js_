function toTitleCase(str) {
	var strArray = str.split(" ");
	strArray.forEach(function(x, i, a){
		a[i] = x.charAt(0).toUpperCase() + x.substr(1);
	});
	return strArray.join(" ");
}

function toUpperCase(str) {
	var code=0, newStr="";
	for (var i=0; i<str.length; i++) {
		code = str.charCodeAt(i);
		if (code >= 95 && code <= 122) {
			code = code - 32;
		}
		newStr += String.fromCharCode(code);
	}
	return newStr;
}

console.log(toTitleCase("this is a sentence, in lowercase."));

console.log(toUpperCase("this is goi#;ng to be'2@come upp%er&case"));