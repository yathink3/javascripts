/*
5.Palindrome-Checker
    a.Desc -> A palindrome is a string that reads the same forward and backward, for example, radar, toot, and madam. 
      We would like to construct an algorithm to input a string of characters and check whether it is a palindrome.
    b.I/P -> Take a String as an Input 
    c.Logic -> The solution to this problem will use a deque to store the characters of the string. 
      We will process the string from left to right and add each character to the rear of the deque. 
    d.O/P -> True or False to Show if the String is Palindrome or not.
*/
let DeQueue=require('./utility/deQueue');
//creating object of DeQueue
let d=new DeQueue();
//importing readline-sync
let r=require('readline-sync');
//read an string from user
let str=r.question("enter the string :");
//first splitting string and passed to array and inserting each element to the dequeue 
str.split('').forEach(element=>d.insert(element));
//it will print the array format of queue
console.log(d.getArray());
//it will check the data in queue is palindrome or not
if(d.checkIsPali()) console.log('given string is palindrome');
else console.log('given string is not palindrome');


