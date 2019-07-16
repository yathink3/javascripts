var r = require('readline-sync');
var n=r.questionInt("enter value n:");
module.exports.n=n;
var sum=0;
while(n>0) sum=sum+(1/n--);
console.log(sum);