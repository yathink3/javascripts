var r = require('readline-sync');
var n=r.question("number of times flip coins:");
var k=0;
for(var i=0;i<n;i++){
    var rno=Math.random();
    console.log(rno+" ");
    if(rno<0.5) k++;
}
var perctail=(k/n)*100;
var perchead=(n-k)/(n)*100;
console.log("percentage of tails:"+perctail+",percentage of heads:"+perchead);