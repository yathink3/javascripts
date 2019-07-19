let sqrt=t=>{
    let c=t;
    let ep=Math.pow(Math.E, -15);
    while(Math.abs(t-(c/t))>ep*t)
        t=((c/t)+t)/2;
    return t;
}
let r=require('readline-sync');
let t=r.questionInt('enter a number:');
console.log(sqrt(t));