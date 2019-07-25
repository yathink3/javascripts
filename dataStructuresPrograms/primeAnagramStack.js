/********************************************************************************************************************
* @Execution : default node : cmd> primeAnagramStack.js
* @Purpose : to study the data structures
* @description :Add the Prime Numbers that are Anagram in the Range of 0 - 1000 in a Stack using the Linked List and Print the Anagrams in the Reverse Order.
* @overview : prime anagrams using stack
* @author : yathin k <yathink3@gmail.com>
* @version : 1.0
* @since : 24-july-2019
*******************************************************************************************************************/


//importing stack modules
let stack = require('./utility/stack');
//importing the stack modules
let a = require('./utility/anagram');
//importing the prime modules
let p = require('./utility/primes');
//creating the object of stack
let s = new stack();
//assaigning and pushing prime no that are anagrams in that  range into the stack
a.anagrams(p.primeRange(1000)).forEach(ele => s.push(ele));
//poping all elements from stack until stack is empty
while (!s.isempty()) console.log(s.pop());