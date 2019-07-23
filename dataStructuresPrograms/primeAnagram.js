/*
12.Extend the Prime Number Program and store only the numbers in that range that are Anagrams.
 For e.g. 17 and 71 are both Prime and Anagrams in the 0 to 100 range. 
 Further store in a 2D Array the numbers that are Anagram and numbers that are not Anagram
*/
//importing the anagram modules
let a=require('./utility/anagram');
//importing prime modules
let p=require('./utility/primes');
//displaying all primeno that are anagram with that range
console.log(p.primeRangeArray(1000,a.anagrams));