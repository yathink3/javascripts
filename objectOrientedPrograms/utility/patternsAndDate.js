//creating patternAndDate class
class PatternAndDate{

}

/*
 considering name until first space as firstname
if name is invalid throw the exception
*/
PatternAndDate.prototype.getFirstName = (fullname) => {
    name = /[^\s]+/.exec(fullname)
    if (!name) throw "name is invalid";
    else return name;
}
//if entered phoneno is invalid throw exceptin else print as valid
PatternAndDate.prototype.checkPhoneNo = (phoneno) => {
    if (!phoneno.match(/^\d{10}$/)) throw "phone no is invalid";
    else console.log('phone no is valid');
}
/*
considering the current date upto first 10 character
creating datedata which contains day month year in array formate
and returns the date to be in XX/XX/XXXX formate
*/
PatternAndDate.prototype.getToDayDate = () => {
    let toDay = new Date().toJSON().slice(0, 10)
    dateData = /(\d{4})-(\d{2})-(\d{2})/.exec(toDay);
    return dateData[3] + '/' + dateData[2] + '/' + dateData[1];
}
/*
date formate to check date from the given para 
*/
PatternAndDate.prototype.getDateformate = () => /(\d{2})\/(\d{2})\/(\d{4})/;

module.exports = PatternAndDate;