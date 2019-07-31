/********************************************************************************************************************
 * @Execution : default node : cmd> regularExpression.js
 * @Purpose : to study objectOriented programs
 * @description :Read in the following message: Hello <<name>>, We have your full name as <<full name>> in our system.
 *              your contact number is 91-xxxxxxxxxx. Please,let us know in case of any clarification Thank you BridgeLabz 01/01/2016.
 *              Use Regex to replace name, full name, Mobile#, and Date with proper value.
 * @overview : Regular Expression Demonstration
 * @author : yathin k <yathink3@gmail.com>
 * @version : 1.0
 * @since : 26-july-2019
 *******************************************************************************************************************/
//importing patterns and date
let pattern1 = require("./utility/patternsAndDate")
//importing readline modules
let read = require('readline-sync');
//creating pttern object
let pattern = new pattern1();
//assaign the str with paragraph which have to modify
let str = "Hello <<name>>, We have your full name as <<full name>> in our system. your contact number is 91-xxxxxxxxxx. Please,let us know in case of any clarification Thank you BridgeLabz  01/01/2016."
let fullname = read.question('enter your full name:');
//setting fullname
pattern.setfullname = fullname;
let phoneno = read.question('enter your phoneno:');
//setting phone no
pattern.setphone = phoneno;
//get the firstname
let firstName = pattern.getFirstName;
//checking phone no is valid or not
pattern.checkPhoneNo
//replace the data 
console.log(str.replace("<<name>>", firstName).replace("<<full name>>", fullname).replace("xxxxxxxxxx", pattern.getphoneno).replace(pattern.getDateformate, pattern.getToDayDate));