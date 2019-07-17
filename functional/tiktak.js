var r=require('readline-sync');
var arr1=Array(Array(-1,-2,-3),Array(-4,-5,-6),Array(-7,-8,-9));
var t=8;
printtik();
while(t>1){
    do{
        var x=r.questionInt("enter the value of\nX[0-2]:");
        var y=r.questionInt("y[0-2]:");
    }while(arr1[x][y]>0);
    arr1[x][y]=1;
    t--;
    printtik();
    if(iswin()){
        console.log("you win the match!");
        return;
    }
    if(t!=1){
        do{
                var x=parseInt(Math.random() * 10)%3;
                var y=parseInt(Math.random() * 10)%3;
        }while(arr1[x][y]>0);
        arr1[x][y]=2;
        t--;
        console.log("computer enters the index!");
        printtik();
        if(iswin()){
            console.log("computer is win the match!");
            return;
        }
    }
}
console.log("match drawed!");
printtik();
function iswin(){
    for(var i=0;i<3;i++){
        if(arr1[i][0]==arr1[i][1] && arr1[i][0]==arr1[i][2]) return 1;
        if(arr1[0][i]==arr1[1][i] && arr1[0][i]==arr1[2][i]) return 1;
    }
    if(arr1[0][0]==arr1[1][1] && arr1[0][0]==arr1[2][2]) return 1;
    if(arr1[0][2]==arr1[1][1] && arr1[0][2]==arr1[2][0]) return 1;
    return 0;
}
function printtik(){
    for(var i=0;i<3;i++){
        var str="";
        for(var j=0;j<3;j++){
            if(arr1[i][j]<0)  str=str+"  ";
            else{
                if(arr1[i][j]==1)  str=str+"X ";
                else   str=str+"O ";
            }
            if(j<2) str=str+"| ";
        }
        console.log(str);
        if(i<2) console.log("---------");
   }
}