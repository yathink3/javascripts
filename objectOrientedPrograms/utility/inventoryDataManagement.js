
//importing file io
let fs = require('fs');
fname = null;
content = null;
//creating class Inventory
class Inventary {
    //constructor calling
    constructor(filename) {
        fname = filename;
        content = JSON.parse(fs.readFileSync(fname));
    }
}
//returns the json object
Inventary.prototype.display = () => content;
//save data back to the file
Inventary.prototype.jsonSave = () => {
    fs.writeFileSync(fname, JSON.stringify(content));
}
//iterating the json object and calculating values
Inventary.prototype.calculateAll = () => {
    let sum = 0;
    content.forEach(inventary => {
        Object.keys(inventary).forEach(cat => {
            let sum1 = 0;
            //iterating through   json object and calculating values wigth*price
            inventary[cat].forEach(item => sum1 = sum1 + (item.weight * item.price));
            console.log("value of " + cat + "=" + sum1);
            sum = sum + sum1;
        });
        //displaying total sum
        console.log("value of all inventary=" + sum);
    });

}
//adding category
Inventary.prototype.addcategory = (category = null) => {
    content.forEach(inventary => {
        inventary[category] = [];
    })

}
//additem to the perticular category
Inventary.prototype.additem = (category = null, name = null, weight = null, price = null) => {
    try {
        content.forEach(inventary => {
            inventary[category].push({
                "name": name,
                "weight": weight,
                "price": price
            })
        });
    } catch (e) {
        Inventary.prototype.addcategory(category);
        Inventary.prototype.additem(category, name, weight, price);
    }

}

//exporting the inventory

module.exports = Inventary