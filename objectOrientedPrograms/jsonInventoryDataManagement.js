/********************************************************************************************************************
 * @Execution : default node : cmd> jsonInventoryDataManagement.js
 * @Purpose : to study the object oriented programming
 * @description :Create a JSON file having Inventory Details for Rice, Pulses and Wheats with properties name, weight, price per kg. 
 * @overview : JSON Inventory Data Management of Rice, Pulses and Wheats
 * @author : yathin k <yathink3@gmail.com>
 * @version : 1.0
 * @since : 25-july-2019
 *******************************************************************************************************************/
//importing inventary class
let inventory=require('./utility/inventoryDataManagement')
//creating object of inventory
let inv = new inventory("./inventoryDataManagement.json");
//calulting value
inv.calculateAll();
//displaying json object
console.log(inv.display());