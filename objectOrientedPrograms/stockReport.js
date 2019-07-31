/********************************************************************************************************************
 * @Execution : default node : cmd> stockReport.js
 * @Purpose : to study the object oriented programming
 * @description: Write a program to read in Stock Names, Number of Share, Share Price.
 *                Print a Stock Report with total value of each Stock and the total value of Stock.
 * @overview:  Stock Report
 * @author : yathin k <yathink3@gmail.com>
 * @version : 1.0
 * @since : 26-july-2019
 *******************************************************************************************************************/
//importing stock class
let Stock = require('./utility/stock')
let read = require('readline-sync');
//creating stock object
let stock = new Stock("./stockReport.json");
//reading name shares and price
let name = read.question('enter stock name:');
let shares = read.questionInt('enter stock shares:');
let price = read.questionInt('enter stock price:')
//adding stuffs
stock.add(name, shares, price);
//deleting data
stock.delete("hp")
//print report
stock.printReport();
//save the data back to the file
stock.save();
//print valueof
console.log(stock.valueOf());