/*
9.Merge Sort  - Write a program with Static Functions to do Merge Sort of list of Strings. 
    a.Logic -> To Merge Sort an array, we divide it into two halves, sort the two halves independently,
        and then merge the results to sort the full array. To sort a[lo, hi), we use the following recursive strategy:
    b.Base case: If the subarray length is 0 or 1, it is already sorted.
    c.Reduction step: Otherwise, compute mid = lo + (hi - lo) / 2,
        recursively sort the two subarrays a[lo, mid) and a[mid, hi), and merge them to produce a sorted result. 
*/
// mergesort function to divide the array elements and sort it
function mergesort(f,l,arr){
    //we need atleast two element so on
    if(f<l){
        // it is used to find the middle position of array
        var m=f+parseInt((l-f)/2);
        //mergesort applied on left side of array
        mergesort(f,m,arr);
        //mergesort applied on right side of array
        mergesort(m+1,l,arr);
        //after all division ,now to merge two sorted arrays
        merge(f,m,l,arr);
    }
}
//merge function is used to merge the two sorted into one 
function merge(f,m,l,arr){
    var arr1=[];
    var arr2=[];
    //copie the elements from f to m into arr1
    for(var i=f;i<=m;i++) arr1.push(arr[i]);
    //
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