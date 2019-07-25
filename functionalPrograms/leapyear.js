var r = require('readline-sync');
var y=r.question("enter the yaer:");
while(y.length!=4) y=r.question("enter the yaer of size 4:");
if(y%4==0 && (y%100!=0 || (y%100==0 && y%400==0)))  console.log(y+" is leap year");
else    console.log(y+" is not leap year");