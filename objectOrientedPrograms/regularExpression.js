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
let pattern = require("./utility/patternsAndDate")
 //creating pttern object
let p= new pattern();
//importing readline modules
let r = require('readline-sync');
//assaign the str with paragraph which have to modify
let str = "Hello <<name>>, We have your full name as <<full name>> in our system. your contact number is 91-xxxxxxxxxx. Please,let us know in case of any clarification Thank you BridgeLabz  01/01/2016."
let fullname = r.question('enter your full name:');
//get the firstname
let firstName = p.getFirstName(fullname);
let phoneno = r.question('enter your phoneno:');
//checking phone no is valid
p.checkPhoneNo(phoneno);
//get the dateformate
let updateDate = p.getToDayDate();
//replace the data 
console.log(str.replace("<<name>>", firstName).replace("<<full name>>", fullname).replace("xxxxxxxxxx", phoneno).replace(p.getDateformate(), updateDate));