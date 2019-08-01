/********************************************************************************************************************
 * @Execution : default node : cmd> stockLinkedList.js
 * @Purpose : to study the object oriented programming
 * @description: 6. Maintain the List of CompanyShares in a Linked List So new CompanyShares can be added or removed easily.
 *              Do not use any Collection Library to implement Linked List.
 * @overview:  Stock Report using linkedlist
 * @author : yathin k <yathink3@gmail.com>
 * @version : 1.0
 * @since : 31-july-2019
 *******************************************************************************************************************/

//importing fs
let fs = require('fs');
//importing linkedlist
let linkelist = require('./utility/linkedList')
//creating object of linkedlist
let linkedObject = new linkelist();
fname = './jsons/stockReport.json'
//parsing json data
content = JSON.parse(fs.readFileSync(fname));
content1 = [];
//converting an json data to the linked list
content.forEach(element => {
    linkedObject.firstAdd(element);
});
//inserting data to the manually to the linkedlist
linkedObject.firstAdd("ji", 23, 55)

linkedObject.getArray.forEach(ele => {
    console.log(ele)
})
//linkedlist data inserting back to the array
linkedObject.getArray.forEach(ele => {
    content1.push(ele);
})
//deleting data
linkedObject.lastDelete("hai");
linkedObject.getArray.forEach(ele => {
    console.log("name=" + ele.name, "shares=" + ele.shares, "price=" + ele.price)
})
console.log(linkedObject)
//inserting files back to the json file
fs.writeFileSync(fname, JSON.stringify(content1));