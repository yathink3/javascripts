//importing fs
let fs = require('fs');
content = null;
filename = null;
//creating stokAccount
class StockAccount {
    constructor(fname) {
        filename = fname;
        //parsing json file into object
        content = JSON.parse(fs.readFileSync(fname));
    }
}
//valueof will return the valueof the stock by sharesXprices
StockAccount.prototype.valueOf = () => {
    let sum = 0;
    content.forEach(stock => {
        sum = sum + stock.shares * stock.price;
    });
    return sum;
}
//buy will add users amount to the stocks shares and update the time
StockAccount.prototype.buy = (amount, symbol) => {
    content.forEach(stock => {
        if (stock.name === symbol) {
            stock.shares = stock.shares + parseInt((amount) / stock.price);
            stock["time"] = new Date();
        }
    });
}
//sell will subtract shares from the stocks
StockAccount.prototype.sell = (amount, symbol) => {
    content.forEach(stock => {
        if (stock.name === symbol) {
            if (stock.shares * stock.price >= amount) {
                stock.shares = parseInt((stock.shares * stock.price - amount) / stock.price);
                stock["time"] = new Date();
            }
        }
    });
}
//save will save the data back to the json 
StockAccount.prototype.save = () => {
    fs.writeFileSync(filename, JSON.stringify(content));
}
//it will print the report of the stocks
StockAccount.prototype.printReport = () => {
    let sum = 0;
    content.forEach(stock => {
        console.log(stock.name + " " + stock.shares + " " + stock.price + " " + stock.shares * stock.price);
        sum = sum + stock.shares * stock.price;
    });
    console.log("total inventory value=" + sum);
}
//it will add new stock
StockAccount.prototype.add = (name, shares, price) => {
    let obj = {
        "name": name,
        "shares": shares,
        "price": price
    }
    content.push(obj);
}
//it will delete the stocks
StockAccount.prototype.delete = (name) => {
    content = content.filter(stock => stock.name != name)
}

module.exports = StockAccount;