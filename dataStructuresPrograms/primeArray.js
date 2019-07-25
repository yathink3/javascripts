/********************************************************************************************************************
* @Execution : default node : cmd> primeArray.js
* @Purpose : to study the data structures
* @description :Take a range of 0 - 1000 Numbers and find the Prime numbers in that range.
                Store the prime numbers in a 2D Array, the first dimension represents the range 0-100, 100-200, and so on.
                While the second dimension represents the prime numbers in that range
* @overview : prime no's  store in array
* @author : yathin k <yathink3@gmail.com>
* @version : 1.0
* @since : 24-july-2019
*******************************************************************************************************************/


//importing primes
let p = require('./utility/primes');
//printing all prime no in arrays of prime no
console.log(p.primeRangeArray(1000));