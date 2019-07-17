/* 1.User Input and Replace String Template “Hello <<UserName>>, How are you?” 
    a.I/P -> Take User Name as Input. Ensure UserName has min 3 char
    b.Logic -> Replace <<UserName>> with the proper name
    c.O/P -> Print the String with User Name 
*/
//it is library module ,used to take input from user by using keyboard
var r = require('readline-sync');
//waiting for user input or response
var name=r.question("enter your name:");
//take the original string given
var str1="Hello <<username>>,How are you";
//considering the replacing string
var str2="<<username>>";
//replacing string by user input
var str3=str1.replace(str2,name);
//displays resulting data
console.log(str3);
module.exports.n=name.length;