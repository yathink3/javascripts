//importing files modules
let fs = require('fs');
//readf takes filepath and reads the data from file and returns the splitted words in array
let readF = filePath => {
    let buff = fs.readFileSync(filePath);
    return buff.toString().split(" ");
}
//writef takes filepath and an array and copies the data to the specified file
let writeF = (filePath, arr) => fs.writeFileSync(filePath, arr.join(" "));
//exporting readf and writef
module.exports = {
    readF,
    writeF
};