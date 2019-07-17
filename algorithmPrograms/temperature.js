class temperature{
    static celcitofahrenet(cel) {
        return ((cel*(9/5))+32);
    }
    static fehranettocelci(fahr){
        return ((fahr-32)*(5/9));
    }
}

var r=require('readline-sync');
var s=r.question("enter 0 for celci to fahranet 1 for fahranet to celci:");
var d=r.question("enter conversion data:");
if(s==0) console.log(temperature.celcitofahrenet(d));
else console.log(temperature.fehranettocelci(d));