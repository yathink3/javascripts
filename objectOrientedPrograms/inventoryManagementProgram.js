/********************************************************************************************************************
 * @Execution : default node : cmd> inventoryManagementProgram.js
 * @Purpose : to study the object oriented programming
 * @description :a. Extend the above program to Create InventoryManager to manage the Inventory. The Inventory Manager will use InventoryFactory to create Inventory Object from JSON. 
 *              The InventoryManager will call each Inventory Object in its list to calculate the Inventory Price and then call the Inventory Object to return the JSON String.
 *               The main program will be with InventoryManager
 * @overview : JSON Inventory Management Program
 * @author : yathin k <yathink3@gmail.com>
 * @version : 1.0
 * @since : 26-july-2019
 *******************************************************************************************************************/
//importing inventary class
let inventary=require('./utility/inventoryDataManagement')
//creating inventory object
let inv=new inventary();
//parsing json file to bject
inv.jsonParse("./inventoryDataManagement.json");
//calculating value
inv.calculateAll();
//adding category
inv.addcategory("maze");
//adding item
inv.additem("maze", 'm1', 78, 89);
inv.additem("mazer","m2",67,89);
//save json file
inv.jsonSave();
console.log(inv.display());