/*
7.Number of Binary Search Tree
Solve the Problem in the following link https://www.hackerrank.com/challenges/number-of-binary-search-tree.
*/
let r=require('readline-sync');
let data=r.questionInt("enter the num:");
let m=1;
for(i=2;i<=data;i++){
    m=m+Math.pow(3,(i-2));
}

console.log(parseInt(m%(Math.pow(10,8)+7)));
