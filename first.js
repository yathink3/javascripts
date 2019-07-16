var r = require('readline-sync');
var name=r.question("enter your name:");
var str1="Hello <<username>>,How are you";
var str2="<<username>>";
var str3=str1.replace(str2,name);
console.log(str3);
module.exports.n=name.length;