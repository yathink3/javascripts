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
let stock = require('./utility/stock')
let r = require('readline-sync');
//creating stock object
let s = new stock("./stockReport.json");
//reading name shares and price
let name = r.question('enter stock name:');
let shares = r.questionInt('enter stock shares:');
let price = r.questionInt('enter stock price:')
//adding stuffs
s.add(name, shares, price);
//deleting data
s.delete("hp")
//print report
s.printReport();
//save the data back to the file
s.save();
//print valueof
console.log(s.valueOf());










/*
mydata=[];
fs.readFileSync('./file.txt').toString().split("\r\n").forEach(element => mydata.push(element.split(" ")));
this.stocks=mydata;
*/