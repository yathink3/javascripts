/********************************************************************************************************************
* @Execution : default node : cmd> hashing.js
* @Purpose : to study the data structures
* @description :Create a Slot of 10 to store Chain of Numbers that belong to each Slot to efficiently search a number from a given set of number
* @overview : Hashing Function to search a Number in a slot
* @author : yathin k <yathink3@gmail.com>
* @version : 1.0
* @since : 24-july-2019
*******************************************************************************************************************/

//importing lodash
let l = require('lodash');
//importing linkedlist modules
let linkedList = require('./utility/linkedList');
//importing files operataions
let f = require('./utility/files');
//importing readline-sync
let r = require('readline-sync');
//creating hash size 
let num = 11;
//creating an array for hash
let h = [];
//pushing num number of  object of linkedlist to the hash array
l.times(num, () => h.push(new linkedList()));
//adding array elements to the hash of linked list
f.readF('../input.txt').forEach(element => {
    let key = parseInt(parseInt(element) % num);
    h[key].add(element);
});
//printing hash data to the prompt
h.forEach(ele => console.log(ele.getArray()));
//it collects user data
let data = r.question('enter the data to be search:');
//it will check the user enterd element if it is present remove it ,if it is not present add at the end of hash linked list
let key1 = parseInt(parseInt(data) % num);
h[key1].isPresentDeleteOrAdd(data);
fh.forEach(ele => console.log(ele.getArray()));
//creating temporary array
let temp = [];
//concating linked list elements
h.forEach(ele => temp = temp.concat(ele.getArray()));
//writing files back to the file
f.writeF('../input.txt', temp);