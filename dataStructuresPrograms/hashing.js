/*
6.Hashing Function to search a Number in a slot
    a.Desc -> Create a Slot of 10 to store Chain of Numbers that belong to each Slot to efficiently search a number from a given set of number
    b.I/P -> read a set of numbers from a file and take user input to search a number
    c.Logic -> Firstly store the numbers in the Slot. Since there are 10 Numbers divide each number by 11 and the reminder put in the appropriate slot.
     Create a Chain for each Slot to avoid Collision. If a number searched is found then pop it or else push it. Use Map of Slot Numbers and Ordered LinkedList to solve the problem. 
     In the Figure Below, you can see number 77/11 reminder is 0 hence sits in the 0 slot while 26/11 remainder is 4 hence sits in slot 4
    d.O/P -> Save the numbers in a file
*/
//importing linkedlist modules
let linkedList=require('./utility/linkedList');
//importing files operataions
let f=require('./utility/files');
//importing readline-sync
let r=require('readline-sync');
//creating hash size 
let num=11;
//creating an array for hash
let h=[];
//pushing num number of  object of linkedlist to the hash array
for(i=0;i<num;i++) h.push(new linkedList());
//adding array elements to the hash of linked list
f.readF('../input.txt').forEach(element =>{
    let key=parseInt(parseInt(element)%num);
    h[key].add(element);
});
//printing hash data to the prompt
for(i=0;i<num;i++)  console.log(h[i].getArray());
//it collects user data
let data=r.question('enter the data to be search:');
//it will check the user enterd element if it is present remove it ,if it is not present add at the end of hash linked list
let key1=parseInt(parseInt(data)%num);
h[key1].isPresentDeleteOrAdd(data);
for(i=0;i<num;i++)  console.log(h[i].getArray());
//creating temporary array
let temp=[];
//concating linked list elements
for(i=0;i<num;i++) temp=temp.concat(h[i].getArray());
//writing files back to the file
f.writeF('../input.txt',temp);