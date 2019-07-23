/*
2.Ordered List
    a.Desc -> Read .a List of Numbers from a file and arrange it ascending Order in a Linked List. Take user input for a number, if found then pop the number out of the list else insert the number in appropriate position
    b.I/P -> Read from file the list of Numbers and take user input for a new number
    c.Logic -> Create a Ordered Linked List having Numbers in ascending order. 
    d.O/P -> The List of Numbers to a File.
*/
//importing linkedlist modules
let linkedList=require('./utility/linkedList');
//importing files operataions
let f=require('./utility/files');
//importing readline-sync
let r=require('readline-sync');
//creating an object of linkedlist
let ls=new linkedList();
//adding array elements to the linked list
f.readF('../input.txt').forEach(element => ls.add(element));
console.log(ls.getArray());
//sorting the linked list elements
ls.sort();
let data=r.question('enter the data to be search:');
//it will check the user enterd element if it is present remove it ,if it is not present add appropriate position
ls.orderedCheck(data);
console.log(ls.getArray());
//writing files back to the list
f.writeF('../input.txt',ls.getArray());