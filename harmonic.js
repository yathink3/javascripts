var r = require('readline-sync');
var n=r.question("enter value n:");
var sum=0;
while(n>0) sum=sum+(1/n--);
console.log(sum);