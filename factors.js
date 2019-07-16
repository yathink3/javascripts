var r = require('readline-sync');
var n=r.questionInt("enter value n:");
module.exports.n=n;
for(var i=2;i<=n;i++)
    while(n%i==0){
        console.log(i+" ");
       n=n/i;
    }