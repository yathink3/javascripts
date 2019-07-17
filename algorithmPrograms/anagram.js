var r=require('readline-sync');
var str1=r.question("enter a string1:");
var st1=str1.split("");
var str2=r.question("enter a string2:");
var st2=str2.split("");
var str="";
if(str1.length==str2.length){
    st1.sort();
    st2.sort();
    for(var i=0;i<st1.length;i++){
        if(st1[i]!=st2[i]) str="not";
    }
}
else str="";
console.log(str1+" & "+str2+" are "+str+" anagrams");
module.exports.a=str1;
module.exports.b=str2;