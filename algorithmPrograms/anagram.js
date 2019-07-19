/*
1.An Anagram Detection Example
    a.Desc -> One string is an anagram of another if the second is simply a rearrangement of the first.
             For example, 'heart' and 'earth' are anagrams...
    b.I/P -> Take 2 Strings as Input such abcd and dcba and Check for Anagrams
    c.O/P -> The Two Strings are Anagram or not....
2.Take a range of 0 - 1000 Numbers and find the Prime numbers in that range. 
3.Extend the above program to find the prime numbers that are Anagram and Palindrome 
*/

/*
the anagram function will check whether the given strings are anagram or not
here first it will assign str to null & then take two arrays as st1 and st2 by splitting into str1 and str2
if the length of str1 and str2 are equal then only checks the following otherwise return false
if their size are equal then sorted two arrays and then joins them if they are equal returns true else return false
*/
let anagram=(str1,str2)=>{
    let st1=str1.split("");
    let st2=str2.split("");
    if(str1.length==str2.length){
        st1.sort();
        st2.sort();
        if(st1.join()==st2.join()) return true;
        else return false;
    }
    else return false;
}

let r=require('readline-sync');
let str1=r.question("enter a string1:");
let str2=r.question("enter a string2:");
if(anagram(str1,str2))  console.log(str1+" & "+str2+" are anagrams");
else  console.log(str1+" & "+str2+" are not anagrams");
module.exports.a=str1;
module.exports.b=str2;
