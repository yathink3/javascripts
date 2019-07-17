function mergesort(f,l,arr){
    if(f<l){
        var m=f+parseInt((l-f)/2);
        mergesort(f,m,arr);
        mergesort(m+1,l,arr);
        merge(f,m,l,arr);
    }
}
function merge(f,m,l,arr){
    var arr1=[];
    var arr2=[];
    for(var i=f;i<=m;i++) arr1.push(arr[i]);
    for(var j=m+1;j<=l;j++) arr2.push(arr[j]);
    var i=0,j=0;
    while(i<(arr1.length) && j<(arr2.length))
        arr[f++] = arr1[i] < arr2[j] ? arr1[i++] : arr2[j++]; 
    while(i<(arr1.length)) arr[f++]=arr1[i++];
    while(j<(arr2.lenght)) arr[f++]=arr2[j++];

}
var arr=[5,6,2,8,3,4];
mergesort(0,arr.length-1,arr);
console.log(arr);