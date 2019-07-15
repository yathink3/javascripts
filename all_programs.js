var r=require('readline-sync');
class program{
    static  binarysearch(key,arr){
        var n=arr.length;
        var f=0,l=n-1,mid;
        while(f<=l){
            mid=parseInt((f+l)/2);
            if(key==arr[mid]) return mid;
            else if(key<arr[mid]) l=mid-1;
            else f=mid+1;
        }
        return "not found";
    }
    static insertionsort(arr){
        var n=arr.length;
        var temp;
        for(var i=1;i<n;i++){
            if(arr[i]>=arr[i-1]) continue;
            for(var j=i;j>0;j--){
                if(arr[j]<arr[j-1]){
                    temp=arr[j];
                    arr[j]=arr[j-1];
                    arr[j-1]=temp;
                }
            }
        }
        return arr;
    }
    static bubblesort(){
        var n=arr.length;
        var temp;
        for(var i=0;i<n;i++){
            for(var j=0;j<n-1;j++){
                if(arr[j]>arr[j+1]){
                    temp=arr[j];
                    arr[j]=arr[j+1];
                    arr[j+1]=temp;
                }
            }
        }
        return arr;
    }
}
var n=r.question("enter the size of array:");
var arr=[n];
console.log('enter the intiger array elements');
for(var i=0;i<n;i++)
    arr[i]=r.questionInt();
module.exports.a=arr;
var arr2=arr;
var s=new Date();
program.insertionsort(arr);
console.log("insertion sort for intiger-"+(new Date-s)+"ms");
module.exports.b=arr;
module.exports.a1=arr2;
var s=new Date();
program.bubblesort(arr2);
console.log("bubble sort for intiger-"+(new Date-s)+"ms");
module.exports.b1=arr2;
var arr1=[n];
console.log('enter the string array elements');
for(var i=0;i<n;i++)
    arr1[i]=r.question();
var arr3=arr1;
module.exports.a2=arr1;
s=new Date();
program.insertionsort(arr1);
console.log("insertion sort string-"+(new Date-s)+"ms");
module.exports.b2=arr1;
module.exports.a3=arr3;
s=new Date();
program.bubblesort(arr3);
console.log("bubble sort for string-"+(new Date-s)+"ms");
module.exports.b3=arr3;
var key=r.question("enter the key value of intiger:");
s=new Date();
console.log(program.binarysearch(key,arr));
console.log("binarysearch intiger-"+(new Date-s)+"ms");
var key1=r.question("enter the key value of string:");
s=new Date();
console.log(program.binarysearch(key1,arr1));
console.log("binarysearch string-"+(new Date-s)+"ms");
