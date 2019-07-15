for(var i=2;i<10;i++){
    var b=true;
    for(var j=2;j<i;j++)
        if(i%j==0) b=false;
    if(b==true) console.log(i+" ");
}