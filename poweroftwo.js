//var n=process.argv[2];
var r=require('readline-sync');
var n=r.questionInt('enter  the value of n:');
if(n<0 || n>30) console.log("out of range");
else{
    var k=1;
    for(var i=0;i<n;i++){
        console.log("2^"+i+"="+k);
        k=k*2;
    }
}

module.exports.n=n;