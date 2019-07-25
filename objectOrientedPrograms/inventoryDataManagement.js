/********************************************************************************************************************
* @Execution : default node : cmd> inventoryDataManagement.js
* @Purpose : to study the data structures
* @description :Create a JSON file having Inventory Details for Rice, Pulses and Wheats with properties name, weight, price per kg. 
* @overview : JSON Inventory Data Management of Rice, Pulses and Wheats
* @author : yathin k <yathink3@gmail.com>
* @version : 1.0
* @since : 24-july-2019
*******************************************************************************************************************/

//importing file io
let fs = require('fs');
let sum = 0;
//aceesing json file and converting into object
let content = JSON.parse(fs.readFileSync("./inventoryDataManagement.json"));
//iterating the json object and calculating values
content.forEach(inventary => {
    let sum1 = 0;
    //iterating through rice  json object and calculating values wigth*price
    inventary.rice.forEach(rice => sum1 = sum1 + (rice.weight * rice.price));
    console.log("value of rice=" + sum1);
    sum = sum + sum1;
    let sum2 = 0;
    //iterating through pulse  json object and calculating values wigth*price
    inventary.pulse.forEach(pulse => sum2 = sum2 + (pulse.weight * pulse.price));
    console.log("value of pulse=" + sum2);
    sum = sum + sum2;
    let sum3 = 0;
    //iterating through wheat  json object and calculating values wigth*price
    inventary.wheat.forEach(wheat => sum3 = sum3 + (wheat.weight * wheat.price));
    console.log("value of wheat=" + sum3);
    sum = sum + sum3;
});
//displaying total sum
console.log("value of all inventary=" + sum);
//writing json back to the file
fs.writeFileSync("./inventoryDataManagement.json", JSON.stringify(content));