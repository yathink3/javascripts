/*
6.Binary Search the Word from Word List
    a.Desc -> Read in a list of words from File. Then prompt the user to enter a word to search the list. The program reports if the search word is found in the list.
    b.I/P -> read in the list words comma separated from a File and then enter the word to be searched
    c.Logic -> Use Arrays to sort the word list and then do the binary search
    d.O/P -> Print the result if the word is found or not
*/

/*
binary search function will works for only sorted list , here consider length of array-1 to l and f=0
runs while loop until f<=l 
then find mid element and then check if key is present or not if present returns it
else if key is less than the mid element then make l=mid-1
else key is greater than mid element then make f=mid+1
*/
let binarySearch=(key,arr)=>{
    let n=arr.length;
    let f=0,l=arr.length-1;
    while(f<=l){
        let mid=parseInt((f+l)/2);
        if(key==arr[mid]) return "key found at "+mid;
        else if(key<arr[mid]) l=mid-1;
        else f=mid+1;
    }
    return "key not found";
}
/*
this function is used to access file and and store them into an buffer
and then make it as string and store it in arrays
*/
let accessFiles=filePath=>{
    let fs=require('fs');
    let buff=fs.readFileSync(filePath);
    let data=buff.toString();
    return data.split(" ");
}
let r=require('readline-sync');
let arr=accessFiles('../input.txt');
module.exports.arr=arr;
//sorting the array in ascending order
arr.sort();
console.log(arr);
var key=r.question('enter the key value:');
console.log(binarySearch(key,arr));