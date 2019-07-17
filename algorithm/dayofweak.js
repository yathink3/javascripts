var r=require('readline-sync');
var d=r.questionInt('enter day:');
var m=r.questionInt('enter the month:');
var y=r.questionInt('enter the year');
var y0 = y-parseInt((14-m)/12);
console.log(y0);
var x = y0 +  parseInt(y0/4) -parseInt(y0/100) +parseInt(y0/400);
console.log(x);
var m0 = m + 12 *parseInt((14 - m) / 12) - 2;
console.log(m0)
var d0 = (d + x + parseInt(31*m0 /12))% 7;
console.log(d0);   