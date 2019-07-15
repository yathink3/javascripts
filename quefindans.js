var n=parseInt(process.argv[2]);
var r=require('readline-sync');
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
que(0,n-1);


var fs=require('fs');
fs.readFile('Input.txt', (err, data) => { 
    if (err) throw err; 
    console.log(data.toString()); 
}) ;
