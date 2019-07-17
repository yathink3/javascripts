var r = require('readline-sync');
var s=r.questionInt("enter the size of array:");
var arr=[s];
var arr1=[];
for(var i=0;i<s;i++)
    arr[i]=r.questionInt();
for(var i=0;i<s;i++)
    if(arr1.indexOf(arr[i])==-1) arr1.push(arr[i]);
for(var i=0;i<arr1.length;i++){
    for(var j=i+1;j<arr1.length;j++){
        for(var k=j+1;k<arr1.length;k++){
            if(arr1[i]+arr1[j]+arr1[k]==0)
                console.log(arr1[i]+' '+arr1[j]+' '+arr1[k])
        }
    }
}