/*
2.Flip Coin and print percentage of Heads and Tails
    a.I/P -> The number of times to Flip Coin. Ensure it is positive integer.
    b.Logic -> Use Random Function to get value between 0 and 1. If < 0.5 then tails or heads
    c.O/P -> Percentage of Head vs Tails
*/
//it is library module ,used to take input from user by using keyboard
var r = require('readline-sync');
//waiting for user input or response
var n=r.questionInt("number of times flip coins:");
module.exports.n=n;
//initialise k with 0
var k=0;
//loop runs n times
for(var i=0;i<n;i++){
    //built in Math.random() we use generate random no with range 0 t0 1
    var rno=Math.random();
    console.log(rno+" ");
    //if generated no is less than 0.5 increment k
    if(rno<0.5) k++;
}
//finding percentage of tail
var perctail=(k/n)*100;
//finding percentage of head by subtracting tailes by 100
var perchead=100-perctail;
console.log("percentage of tails:"+perctail+",percentage of heads:"+perchead);