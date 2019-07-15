var r = require('readline-sync');
var name=r.question("enter your name:");
if(name.length<3){}
else{
var str1="Hello <<username>>,How are you";
var str2="<<username>>";
var str3=str1.replace(str2,name);
console.log(str3);
}