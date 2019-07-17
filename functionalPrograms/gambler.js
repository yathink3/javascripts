//it is library module ,used to take input from user by using keyboard
var r = require('readline-sync');
//waiting for user input to enter stack
var s=r.questionInt("enter stack value:");
//waiting for user input to enter goal
var g=r.questionInt("enter goal value:");
//waiting for user input to enter no of iterations
var n=r.questionInt("enter no of iterations:");
//intialise win with 0
var wins=0;
//loop running till i<n
for(var i=0;i<n;i++){
    //initializing k=stack
    var k=s;
    //while loop will run until either k<goals nor k>0 and find random no if random no >0.5 then increment k else decrement k
    while(k<g && k>0){
        var ra=Math.random();
        if(ra<0.5) k++;
        else k--;   
    }
    //if k==g increment wins
    if(k==g)   wins++;
}
console.log(wins);
module.exports.s=s;
module.exports.g=g;