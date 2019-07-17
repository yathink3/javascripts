/*
6.Factors
    a.Desc -> Computes the prime factorization of N using brute force.
    b.I/P -> Number to find the prime factors
    c.Logic -> Traverse till i*i <= N instead of i <= N for efficiency.
    d.O/P -> Print the prime factors of number N.
*/
//it is library module ,used to take input from user by using keyboard
var r = require('readline-sync');
//waiting for user input or response
var n=r.questionInt("enter value n:");
module.exports.n=n;
//looop runs from 2 to given value run
for(var i=2;i<=n;i++)
    //loop runs until n divides by i
    while(n%i==0){
        console.log(i+" ");
       n=n/i;
    }