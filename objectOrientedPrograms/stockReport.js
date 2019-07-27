let fs=require('fs');
let r=require('readline-sync');
let sum = 0;
//aceesing json file and converting into object
let content = JSON.parse(fs.readFileSync("./stockReport.json"));
//iterating the json object and calculating values
content.forEach(stock => {
    console.log(stock.name+" "+stock.shares+" "+stock.price+" "+stock.shares*stock.price);
    sum=sum+stock.shares*stock.price;
});
console.log(sum);
let name=r.question('enter stock name:');
let shares=r.questionInt('enter stock shares:');
let price=r.questionInt('enter stock price:')
let obj={
    "name": name,
    "shares": shares,
    "price": price
}
content.push(obj);
console.log(content);
content=content.filter(stock=>stock.name!=obj.name)
console.log(content);

fs.writeFileSync("./stockReport.json", JSON.stringify(content));




















/*
mydata=[];
fs.readFileSync('./file.txt').toString().split("\r\n").forEach(element => mydata.push(element.split(" ")));
this.stocks=mydata;
*/