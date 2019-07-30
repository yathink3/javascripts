/********************************************************************************************************************
 * @Execution : default node : cmd> mainAddressBook.js
 * @Purpose : to study objectOriented programs
 * @description: Create Object Oriented Analysis and Design of a simple Address Book Problem.
 * @overview: maintain the addressbook
 * @author : yathin k <yathink3@gmail.com>
 * @version : 1.0
 * @since : 30-july-2019
 *******************************************************************************************************************/
//importing the adddressbook claas
let AddressBook = require('./utility/addressBook')
//creating a object of the addressbook
let a = new AddressBook();
//parsing json into json object
a.jsonParse("./addressBook.json")
//adding address to the addressbook
a.addAddress("mohan", "raj", "120", "whitefield");
//searching the address
a.search("manoj");
//update the data of the addressbook
a.update("manoj kumar");
//deleting the data in the addressbook
a.delet("mohan raj");
//save data back the json file
a.jsonSave();