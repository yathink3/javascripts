//importing  the fs
let fs = require('fs')
//importing the readlinesync
let r = require('readline-sync')
//creating the addressbook class
class AddressBook {
    constructor() {
        this.content = null;
        this.fname = null;
    }
}
//parsing json file into object
AddressBook.prototype.jsonParse = (fname) => {
    try {
        this.fname = fname;
        this.content = JSON.parse(fs.readFileSync(this.fname));
    } catch (err) {
        console.log("error"+err)
    }
}

//it will add address to the json file
AddressBook.prototype.addAddress = (firstname, lastname, houseno = null, city = null, district = null, state = null, nationality = null, pincode = null) => {
    try {
        this.content.push({
            "firstname": firstname,
            "lastname": lastname,
            "houseno": houseno,
            "city": city,
            "district": district,
            "state": state,
            "nationality": nationality,
            "pincode": pincode
        })
        console.log("added succefully");
        console.log(this.content);
    } catch (err) {
        console.log("error",err)
    }
}
//sorting the address book depending upon the first name and the last name
AddressBook.prototype.sort = () => {
    try {
        this.content.sort((a, b) => (a.firstname + a.lastname).localeCompare(b.firstname + b.lastname))
        console.log("sorted succefully");
        console.log(this.content);
    } catch (err) {
        console.log("error",err)
    }
}
//searching the person in the addressbook
AddressBook.prototype.search = (name) => {
    try {
        this.content.forEach(el => {
            if (!(el.firstname + " " + el.lastname).search(name)) console.log(el);
        })
    } catch (err) {
        console.log("error",err)
    }
}
//delete the address of the any person specified
AddressBook.prototype.delet = (name) => {
    try {
        names = name.split(" ")
        if (names.length == 1) names.push(" ");
        this.content = this.content.filter(ele => ele.firstname != names[0] || ele.lastname != names[1])
        console.log("deleted succefully");
        console.log(this.content);
    } catch (err) {
        console.log("error",err)
    }
}
//update the content of any person in the address book
AddressBook.prototype.update = (name) => {
    try {
        names = name.split(" ")
        if (names.length == 1) names.push(" ");
        this.content.forEach(ele => {
            if (ele.firstname == names[0] && ele.lastname == names[1]) {
                key = r.question("enter key you want to modify:")
                if (ele[key]) {
                    data = r.question("enter data:")
                    ele[key] = data;
                } else console.log("key not found")
            }
        })
        console.log("updated succefully");
        console.log(this.content);
    } catch (err) {
        console.log("error",err)
    }
}
//save the json object back to the file
AddressBook.prototype.jsonSave = () => {
    try {
        fs.writeFileSync(this.fname, JSON.stringify(this.content));
    } catch (err) {
        console.log("error",err)
    }
}
//it will returns the object into to the user
AddressBook.prototype.getdata = () => this.content;

//export the class
module.exports = AddressBook;