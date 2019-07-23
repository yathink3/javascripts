/*
4.Simulate Banking Cash Counter
    a.Desc -> Create a Program which creates Banking Cash Counter where people come in to deposit Cash and withdraw Cash. 
        Have an input panel to add people to Queue to either deposit or withdraw money and dequeue the people. Maintain the Cash Balance.
    b.I/P -> Panel to add People to Queue to Deposit or Withdraw Money and dequeue 
    c.Logic -> Write a Queue Class to enqueue and dequeue people to either deposit or withdraw money and maintain the cash balance
    d.O/P -> True or False to Show Arithmetic Expression is balanced or not.
*/
//importing linkedlist modules
let Queue=require('./utility/queue');
//creating object of Queue
let q=new Queue();
//importing readline-sync
let r=require('readline-sync');
//read an queue size from user
let n=r.question("enter the size :");  
//this for loop will insert the data ino queue
while(n--)  q.insert(r.question("enter the amount :"),r.question("enter the purpose(D/W):"));
console.log('at first ');
console.log(q.getArray());
//bank will manages the cashcounter
q.bank();
console.log('at last ');
console.log(q.getArray());
//it will return the at last amount in the bank
console.log(q.getAmount());