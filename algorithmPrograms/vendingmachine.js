
let minCoin=amount=>{
    let notes=[1,2,5,10,50,100,500,1000];
    let sum=0;
    for(var i=7;i>=0;i--)
    if(parseInt(amount/notes[i])>0){
        var count=parseInt(amount/notes[i]);
        console.log(notes[i]+" * "+count+" = "+notes[i]*count);
        sum=sum+count;
        amount=parseInt(amount%notes[i]);
        }
    return sum;
}
let amount=1200;
console.log("minimum no of notes:"+minCoin(amount));