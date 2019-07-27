
//importing file io
let fs = require('fs');
this.fname = null;
//creating class Inventory
class Inventary {
    //constructor calling
    constructor() {
        this.content = null;
    }
}
//parsing json file into object
Inventary.prototype.jsonParse = (fname) => {
    this.fname = fname
    this.content = JSON.parse(fs.readFileSync(this.fname));
}
//returns the json object
Inventary.prototype.display = () => this.content;
//save data back to the file
Inventary.prototype.jsonSave = () => {
    fs.writeFileSync(this.fname, JSON.stringify(this.content));
}
//iterating the json object and calculating values
Inventary.prototype.calculateAll = () => {
    let sum = 0;
    this.content.forEach(inventary => {
        categories = Object.keys(inventary);
        console.log(categories);
        categories.forEach(cat => {
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
    this.content.forEach(inventary => {
        inventary[category] = [];
    })

}
//additem to the perticular category
Inventary.prototype.additem = (category = null, name = null, weight = null, price = null) => {
    try {
        this.content.forEach(inventary => {
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