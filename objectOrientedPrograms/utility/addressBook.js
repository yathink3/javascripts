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
    this.fname = fname;
    this.content = JSON.parse(fs.readFileSync(this.fname));
}

//it will add address to the json file
AddressBook.prototype.addAddress = (firstname, lastname, houseno = null, city = null, district = null, state = null, nationality = null, pincode = null) => {
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
}
//sorting the address book depending upon the first name and the last name
AddressBook.prototype.sort = () => {
    for (j = 0; j < this.content.length; j++) {
        for (i = 0; i < this.content.length - 1; i++) {
            if (this.content[i].firstname + this.content[i].lastname > this.content[i + 1].firstname + this.content[i + 1].lastname) {
                temp = this.content[i];
                this.content[i] = this.content[i + 1];
                this.content[i + 1] = temp;
            }
        }
    }
     console.log("sorted succefully");
    console.log(this.content);
}
//searching the person in the addressbook
AddressBook.prototype.search = (name) => {
    this.content.forEach(el => {
        if (!(el.firstname + " " + el.lastname).search(name)) console.log(el);
    })
}
//delete the address of the any person specified
AddressBook.prototype.delet = (name) => {
    names = name.split(" ")
    if (names.length == 1) names.push(" ");
    this.content = this.content.filter(ele => ele.firstname != names[0] || ele.lastname != names[1])
     console.log("deleted succefully");
    console.log(this.content);
}
//update the content of any person in the address book
AddressBook.prototype.update = (name) => {
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
}
//save the json object back to the file
AddressBook.prototype.jsonSave = () => fs.writeFileSync(this.fname, JSON.stringify(this.content));
//it will returns the object into to the user
AddressBook.prototype.getdata = () => this.content;

//export the class
module.exports = AddressBook;