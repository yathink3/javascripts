/*2.Take a range of 0 - 1000 Numbers and find the Prime numbers in that range. */
//loop will run until i <1000
let primeRange=n=>{
    for(let i=2;i<n;i++){
        let b=true;
    //in this loop run j=2 to i
    for(let j=2;j<i;j++)
        //if i successfully not divides by any no below that then consider i as a prime no
        if(i%j==0) b=false;
    if(b==true) console.log(i+" ");
    }
}
primeRange(1000);