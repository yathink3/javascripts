/*
11.To the Util Class add dayOfWeek static function that takes a date as input and prints the day of the week that date falls on.
    Your program should take three command-line arguments: m (month), d (day), and y (year). 
    For m use 1 for January, 2 for February, and so forth. 
    For output print 0 for Sunday, 1 for Monday, 2 for Tuesday, and so forth.
    Use the following formulas, for the Gregorian calendar (where / denotes integer division):
*/

/*
find the dayofweak by using equations
*/
let dayOfWeak=(d,m,y)=>{
    let days=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]
    let y0 = y-parseInt((14-m)/12);
    let x = y0 +  parseInt(y0/4) -parseInt(y0/100) +parseInt(y0/400);
    let m0 = m + 12 *parseInt((14 - m) / 12) - 2;
    let d0 = (d + x + parseInt(31*m0 /12))% 7;
    return days[d0];
}

let r=require('readline-sync');
let d=r.questionInt('enter day:');
let m=r.questionInt('enter the month:');
let y=r.questionInt('enter the year');
console.log("day of the weak is "+dayOfWeak(d,m,y));