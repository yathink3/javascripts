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
/*
 considering name until first space as firstname
if name is invalid throw the exception
*/
getFirstName=(fullname)=>{ 
    name=/[^\s]+/.exec(fullname)
    if(!name) throw "name is invalid";
    else return name;
}
//if entered phoneno is invalid throw exceptin else print as valid
checkPhoneNo=(phoneno)=>{
    if(!phoneno.match(/^\d{10}$/)) throw "phone no is invalid";
    else console.log('phone no is valid');
}
/*
considering the current date upto first 10 character
creating datedata which contains day month year in array formate
and returns the date to be in XX/XX/XXXX formate
*/
getToDayDate=()=>{
    let toDay = new Date().toJSON().slice(0, 10)
    dateData=/(\d{4})-(\d{2})-(\d{2})/.exec(toDay);
    return dateData[3] + '/' + dateData[2] + '/' + dateData[1];
}
/*
date formate to check date from the given para 
*/
getDateformate=()=>/(\d{2})\/(\d{2})\/(\d{4})/;


//importing readline modules
let r = require('readline-sync');
//assaign the str with paragraph which have to modify
let str = "Hello <<name>>, We have your full name as <<full name>> in our system. your contact number is 91-xxxxxxxxxx. Please,let us know in case of any clarification Thank you BridgeLabz  01/01/2016."
let fullname = r.question('enter your full name:');
//get the firstname
let firstName = getFirstName(fullname);
let phoneno = r.question('enter your phoneno:');
//checking phone no is valid
checkPhoneNo(phoneno);
//get the dateformate
let updateDate = getToDayDate();
//replace the data 
console.log(str.replace("<<name>>", firstName).replace("<<full name>>", fullname).replace("xxxxxxxxxx", phoneno).replace(getDateformate(), updateDate));