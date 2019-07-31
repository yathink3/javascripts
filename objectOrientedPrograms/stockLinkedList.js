//importing fs
let fs = require('fs');
let linkelist = require('./utility/linkedList')
let linkedObject = new linkelist();
fname = './jsons/stockReport.json'
content = JSON.parse(fs.readFileSync(fname));

content.forEach(element => {
    linkedObject.add(element.name,element.shares,element.price);
});


linkedObject.getArray().forEach(ele => {
    console.log("name=" + ele.name, "shares=" + ele.shares, "price=" + ele.price)
})




























//fs.writeFileSync(fname, JSON.stringify(content));