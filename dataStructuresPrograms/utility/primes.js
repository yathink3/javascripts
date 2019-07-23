/*
isprime will check the passed parameter prime no or not
if n<2 directly return false
if n is divided by any of its previous values returns false
if n s not divided by any of previous values its means that it is a prime no now return true
*/
isPrime=n=>{
    if(n<2) return false;
    for(j=parseInt(n/2);j>=2;j--)
        if(n%j==0) return false;
    return true;
}
/*
primeRangeArray wil divide the prime no into hundreds groups
then here given for multiple purposes if l=0 returns the prime range 
else returns the l object functions
*/
primeRangeArray=(n,l=0)=>{
    let arr=[];
    for(i=1;i<=n/100;i++){
        let min=[];
        for(k=(i-1)*100;k<i*100;k++) 
            if(isPrime(k)) 
                min.push(k);
        if(l==0) arr.push(min);
        else arr.push(l(min));
        
    }
    return arr;
}

//primeRange will returns prime array of given range
primeRange=n=>{
    let arr=[];
    for(i=0;i<n;i++){
        if(isPrime(i)) arr.push(i);
    }
    return arr;
}
//exporting the functions
module.exports={primeRangeArray,isPrime,primeRange};