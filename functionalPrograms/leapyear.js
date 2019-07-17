var r = require('readline-sync');
var n=r.question("enter the yaer:");
while(n.length!=4) n=r.question("enter the yaer of size 4:");
if(n%4==0){
    if(n%100==0){
        if(n%400==0) console.log(n+" is leap year");
        else console.log(n+" is not leap year");
    }
    else  console.log(n+" is leap year");
}
else console.log(n+" is not leap year");