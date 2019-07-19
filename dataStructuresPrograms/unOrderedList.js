/*
1.UnOrdered List
    a.Desc -> Read the Text from a file, split it into words and arrange it as Linked List. 
      Take a user input to search a Word in the List. If the Word is not found then add it to the list, 
      and if it found then remove the word from the List. In the end save the list into a file
    b.I/P -> Read from file the list of Words and take user input to search a Text
    c.Logic -> Create a Unordered Linked List. The Basic Building Block is the Node Object.
      Each node object must hold at least two pieces of information. One ref to the data field and  second the ref to the next node object.
    d.O/P -> The List of Words to a File.
*/
//importing linkedlist modules
let linkedList=require('./linkedlist');
//importing files modules
let fs=require('fs');
//readf takes filepath and reads the data from file and returns the splitted words in array
let readF=filePath=>{
    let buff=fs.readFileSync(filePath);
    return buff.toString().split(" ");
}
//writef takes filepath and an array and copies the data to the specified file
let writeF=(filePath,arr)=>fs.writeFileSync(filePath,arr.join(" "));
//importing readline-sync
let r=require('readline-sync');
//creating an object of linkedlist
let ls=new linkedList();
//adding array elements to the linked list
readF('../input.txt').forEach(element => ls.add(element));
console.log(ls.getArray());
let data=r.question('enter the data to be search:');
//it will check the user enterd element if it is present remove it ,if it is not present add at the end of linked list
ls.isPresentDeleteOrAdd(data);
console.log(ls.getArray());
//writing files back to the file
writeF('../input.txt',ls.getArray());
console.log(ls);