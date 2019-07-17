function binarysearch(key,arr){
    var n=arr.length;
    var f=0,l=n-1,mid;
    while(f<=l){
        mid=parseInt((f+l)/2);
        if(key==arr[mid]) return "key found at "+mid;
        else if(key<arr[mid]) l=mid-1;
        else f=mid+1;
    }
    return "key not found";
}
var r=require('readline-sync');
var fs=require('fs');
data=(fs.readFileSync('../input.txt')).toString();
var arr=data.split(" ");
module.exports.arr=arr;
arr.sort();
console.log(arr);
var key=r.question('enter the key value:');
console.log(binarysearch(key,arr));