/*
In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". 
You have function with one side of the DNA (string, except for Haskell); 
you need to get the other complementary side. DNA strand is never empty or there is no DNA at all
*/


function DNAStrand(dna){
	var orig = ['A','T','C','G'],
    	comp = ['T','A','G','C'];

	return dna.toUpperCase().split("").map(function(char){
    	return comp[orig.indexOf(char)];
	}).join("");
}