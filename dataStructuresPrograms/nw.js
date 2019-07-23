let a=require('./utility/anagram');
console.log(a.anagrams([121,112,211,311,113,131,151,115,111]));




/*
let y0 = y-parseInt((14-m)/12);
let x = y0 +  parseInt(y0/4) -parseInt(y0/100) +parseInt(y0/400);
let m0 = m + 12 *parseInt((14 - m) / 12) - 2;
let d0 = (1 + x + parseInt(31*m0 /12))% 7;
let DayOfMonth=[-1,31,28,31,30,31,30,31,31,30,31,30,31];
md=DayOfMonth[m]+((m==2 && y%4==0 && (y%100!=0 || (y%100==0 && y%400==0)))?1:0);
*/