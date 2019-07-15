var r=require('readline-sync');
var t=r.questionInt('enter a number:');
var c=t;
var ep=Math.pow(Math.E, -15);
while(Math.abs(t-(c/t))>ep*t)
    t=((c/t)+t)/2;
console.log(t);