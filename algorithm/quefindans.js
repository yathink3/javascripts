//var n=parseInt(process.argv[2]);
var r=require('readline-sync');
var n=r.questionInt('enter a number:');
function que(f,l){
    if(f==l) console.log("your guessed number is "+f);
    else{
        var mid=parseInt((f+l)/2);
        var n=r.question("enter if ("+f+" - "+mid+")-->true  or  ("+(mid+1)+" - "+l+")-->false\n");
        if(n=="true") l=mid;
        else f=mid+1;
        que(f,l);
    }
}
module.exports.n=n;
que(0,n-1);