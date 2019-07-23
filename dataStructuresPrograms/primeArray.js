/*
11.Take a range of 0 - 1000 Numbers and find the Prime numbers in that range.
 Store the prime numbers in a 2D Array, the first dimension represents the range 0-100, 100-200, and so on.
  While the second dimension represents the prime numbers in that range
*/
//importing primes
let p=require('./utility/primes');
//printing all prime no in arrays of prime no
console.log(p.primeRangeArray(1000));