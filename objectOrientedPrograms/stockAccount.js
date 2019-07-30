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
let stock=require('./utility/stock')
//creating stock object
let s=new stock("./stockReport.json");
//buy the stock
s.buy(100,"mahindra");
//selling the stock
s.sell(100,"apple");
//print report
s.printReport();
//save the data back to the file
s.save();
//print valueof
console.log(s.valueOf());