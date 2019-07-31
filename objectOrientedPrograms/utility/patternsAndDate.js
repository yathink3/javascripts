//creating patternAndDate class
class PatternAndDate {
    constructor(fullname = null, phoneno = null) {
        this.fullname = fullname;
        this.phoneno = phoneno;
    }

    //seting fullname
    set setfullname(fullname) {
        this.fullname = fullname;
    }
    //seting phoneno
    set setphone(phoneno) {
        this.phoneno = phoneno;
    }
    /*
    considering name until first space as firstname
    if name is invalid throw the exception
    */
    get getFirstName() {
        let name = /[^\s]+/.exec(this.fullname)
        if (!name) throw "name is invalid";
        else return name;
    }
    //returnng phone no
    get getphoneno() {
        return this.phoneno;
    }
    //if entered phoneno is invalid throw exceptin else print as valid
    get checkPhoneNo() {
        if (this.phoneno.match(/^\d{10}$/)) console.log('phone no is valid');
        else throw "phone no is invalid";
    }
    /*
    considering the current date upto first 10 character
    creating datedata which contains day month year in array formate
    and returns the date to be in XX/XX/XXXX formate
    */
    get getToDayDate() {
        let toDay = new Date().toJSON().slice(0, 10)
        let dateData = /(\d{4})-(\d{2})-(\d{2})/.exec(toDay);
        return dateData[3] + '/' + dateData[2] + '/' + dateData[1];
    }
    /*
    date formate to check date from the given para 
    */
    get getDateformate() {
        return /(\d{2})\/(\d{2})\/(\d{4})/
    }
}


module.exports = PatternAndDate;