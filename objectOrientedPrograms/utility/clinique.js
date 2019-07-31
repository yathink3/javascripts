//importing the fs
let fs = require('fs')
//importing the reaadline sync
let r = require('readline-sync')
//converting the json file into the json object 
try {
    this.doctors = JSON.parse(fs.readFileSync("./jsons/doctors.json"));
    this.patients = JSON.parse(fs.readFileSync("./jsons/patients.json"));
} catch (err) {
    console.log("json files didnt find",err)
}
//creating the clinic class
class Clinic {
    constructor() {

    }
}

//search  will search and returns the searched index
Clinic.prototype.search = (serch, doctpatient) => {
    try {
        b = false;
        let arr = [];
        doctpatient.forEach(element => {
            Object.keys(element).forEach(key => {
                if (serch.toString() == element[key].toString()) {
                    if (b == false) console.log("searched detailes are:");
                    b = true;
                    arr.push(doctpatient.indexOf(element))
                    console.log(element);
                }
            })
        });
        if (b == false) console.log("searched detailes not found");
        return arr;
    } catch (err) {
        console.log("error", err);
    }
}
//it will produce patientappointment depending on the patient data
Clinic.prototype.patientAppointment = () => {
    try {
        this.patients.forEach(ele => {
            let serch = r.question("enter doctores detailes whome do you want:");
            c = false;
            arr1 = Clinic.prototype.search(serch, this.doctors);
            arr1.forEach(element => {
                if (c == false && this.doctors[element].consulted < 5) {
                    c = true;
                    this.doctors[element].consulted = this.doctors[element].consulted + 1;
                    if (!this.doctors[element]["patients"]) this.doctors[element]["patients"] = [ele.name];
                    else this.doctors[element]["patients"].push(ele.name)
                }
            })
            if (c == false && arr1.length > 0) console.log("doctores not available you may come tomorrow")
        })
    } catch (err) {
        console.log("error",err)
    }
}
//doctors who are popular ,means consulted more than 3 patients
Clinic.prototype.popularDoctor = () => {
    try {
        arr1 = [];
        this.doctors.forEach(ele => {
            if (ele.consulted > 3) arr1.push(ele.name)
        })
        return arr1;
    } catch (err) {
        console.log("error",err)
    }
}
//specialization who have more popular ,means which specialization have more than 3 consultance
Clinic.prototype.popularSpecialization = () => {
    try {
        arr2 = {};
        this.doctors.forEach(element => {
            if (!arr2[element.specialization]) arr2[element.specialization] = element.consulted;
            else arr2[element.specialization] = arr2[element.specialization] + element.consulted;
        })
        arr1 = [];
        Object.keys(arr2).forEach(ele => {
            if (arr2[ele] > 3) arr1.push(ele);
        })
        return arr1;
    } catch (err) {
        console.log("error",err)
    }
}
//save doctor will used to save the doctors json file
Clinic.prototype.saveDoctor = () => {
    try {
        fs.writeFileSync("./doctors.json", JSON.stringify(this.doctors))
    } catch (err) {
        console.log("error",error)
    }
}
//which will returns the doctores list
Clinic.prototype.printDoctor = () => this.doctors
//exporting clinic
module.exports = Clinic;