/********************************************************************************************************************
 * @Execution : default node : cmd> stockAccount.js
 * @Purpose : to study the object oriented programming
 * @description :StockAccount.java implements a data type that might be used by a financial institution to keep track of customer information. 
 *              The StockAccount class implements following methods
 * @overview : JSON Commercial data processing
 * @author : yathin k <yathink3@gmail.com>
 * @version : 1.0
 * @since : 26-july-2019
 *******************************************************************************************************************/
//importing stock class
let Stock=require('./utility/stock')
//creating stock object
let stock=new Stock("./stockReport.json");
//buy the stock
stock.buy(100,"mahindra");
//selling the stock
stock.sell(100,"apple");
//print report
stock.printReport();
//save the data back to the file
stock.save();
//print valueof
console.log(stock.valueOf());