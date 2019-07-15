var r=require('readline-sync');
var t=r.questionInt('enter a number:');
var str="";
while(t!=0){
    var m=parseInt(t%2);
    str=m+str;
    t=parseInt(t/2);
}
console.log(str);
if(parseInt(str.length%2)!=0) str=0+str;