/********************************************************************************************************************
* @Execution : default node : cmd> unOrderedList.js
* @Purpose : to study the data structures
* @description :Read the Text from a file, split it into words and arrange it as Linked List. 
                Take a user input to search a Word in the List. If the Word is not found then add it to the list, 
                and if it found then remove the word from the List. In the end save the list into a file
* @overview : UnOrdered List
* @author : yathin k <yathink3@gmail.com>
* @version : 1.0
* @since : 24-july-2019
*******************************************************************************************************************/

//importing linkedlist modules
let linkedList = require('./utility/linkedList');
//importing files operataions
let f = require('./utility/files');
//importing readline-sync
let r = require('readline-sync');
//creating an object of linkedlist
let ls = new linkedList();
//adding array elements to the linked list
f.readF('../input.txt').forEach(element => ls.add(element));
console.log(ls.getArray());
let data = r.question('enter the data to be search:');
//it will check the user enterd element if it is present remove it ,if it is not present add at the end of linked list
ls.isPresentDeleteOrAdd(data);
console.log(ls.getArray());
//writing files back to the file
f.writeF('../input.txt', ls.getArray());
console.log(ls);