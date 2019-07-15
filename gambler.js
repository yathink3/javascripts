var r = require('readline-sync');
var s=r.questionInt("enter stack value:");
var g=r.questionInt("enter goal value:");
var n=r.questionInt("enter no of iterations:");
var wins=0;

for(var i=0;i<n;i++){
    var k=s;
    while(k<g && k>0){
        var ra=Math.random();
        if(ra<0.5) k++;
        else k--;   
    }
    if(k==g)   wins++;
}
console.log(wins);

module.exports.s=s;
module.exports.g=g;