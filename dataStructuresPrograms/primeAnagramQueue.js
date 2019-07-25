/********************************************************************************************************************
* @Execution : default node : cmd> primeAnagramQueue.js
* @Purpose : to study the data structures
* @description :Add the Prime Numbers that are Anagram in the Range of 0 - 1000 in a Queue using the Linked List and Print the Anagrams from the Queue.
* @overview : prime anagrams using queues
* @author : yathin k <yathink3@gmail.com>
* @version : 1.0
* @since : 24-july-2019
*******************************************************************************************************************/


//importing linkedlist modules
let Queue = require('./utility/queue');
//importing anagram modules
let a = require('./utility/anagram');
//importing primes modules
let p = require('./utility/primes');
//creating object of Queue
let q = new Queue();
//assaigning and inserting prime no that are anagrams inthat that range into the queue
a.anagrams(p.primeRange(1000)).forEach(ele => q.insert(ele));
//displaying the q data in array formate
console.log(q.getArray());