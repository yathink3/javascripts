let fs = require('fs');

class StockAccount{
    constructor(filename){
        this.filePath="./files/"+filename+".txt"
        fs.writeFileSync(this.filePath);
        this.amount=0;
    }
}
StockAccount.prototype.valueOf=()=>{

}
StockAccount.prototype.buy=(amount,symbol=null)=>{
    this.amount=this.amount+amount;
    
}
StockAccount.prototype.sell=(amount,symbol=null)=>{
    this.amount=this.amount-amount;
}
StockAccount.prototype.save=(filename)=>{
    fs.writeFileSync(this.filePath,this.amount);
    
}
StockAccount.prototype.printReport=()=>{
    
}