/*
the anagram function will check whether the given strings are anagram or not
string by splitting into array and then sorted and join them
returned two string sorted and if they are equal returns true else return false
*/
let isAnagram = (str1, str2) => {
    let sortedstr = (str) => str.split('').sort().join('');
    return sortedstr(str1) == sortedstr(str2);
}
/*
anagrams function takes array as the input,it will check from 0 to len-1 and inner loop run until the next l value to length
if two position values are anagrams then it will add,when we adding we have to check for data is already present or not
if data is already present then add only one element of the anagrams
otherwise both anagrams push into the array and at last returns the array of anagrams

*/
let anagrams = (arr) => {
    let anarray = [];
    for (l = 0; l < arr.length - 1; l++)
        for (m = l + 1; m < arr.length; m++)
            if (isAnagram(arr[l].toString(), arr[m].toString())) {
                let b = true;
                anarray.forEach(element => {
                    if (element.includes(arr[l])) {
                        b = false;
                        if (!element.includes(arr[m])) element.push(arr[m]);
                    }
                });
                if (b == true) anarray.push([arr[l], arr[m]]);
            }
    return anarray;
}
//exports the functions
module.exports = {
    isAnagram,
    anagrams
};