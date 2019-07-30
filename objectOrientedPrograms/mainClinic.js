/********************************************************************************************************************
 * @Execution : default node : cmd> mainClinic.js
 * @Purpose : to study objectOriented programs
 * @description: This programme is used to manage a list of Doctors associated with the Clinique.This also manages the list of patients who use the clinique.It manages Doctors by Name, Id, Specialization and Availability(AM, PM or both).
 *              It manages Patients by Name, ID, Mobile Number and Age.The Program allows users to search Doctor by name, id, Specialization or Availability.Also the programs allows users to search patient by name, mobile number or id.
 *              The programs allows patients to take appointment with the doctor.A doctor at any availability time can see only 5 patients.If exceeded the user can take appointment
                for patient at different date or availability time.Print the Doctor Patient Report.Also show which Specialization is popular in the Clinique as well as which Doctor is popular.
 * @overview: maintain the clinic application
 * @author : yathin k <yathink3@gmail.com>
 * @version : 1.0
 * @since : 30-july-2019
 *******************************************************************************************************************/

//importing clinic class
let Clinic = require("./utility/clinique")
//creating clinic object
let c = new Clinic();
console.log("---welcome to clinic---")
//managing the patient appointment
c.patientAppointment();
//dispalying the popular doctores
console.log(c.popularDoctor())
//displaying the popular specialization
console.log(c.popularSpecialization());
console.log("doctor detailes")
//printing the doctor detailes
console.log(c.printDoctor());