/*
Write a program Calendar.java that takes the month and year as command-line arguments and prints the Calendar of the month. 
Store the Calendar in an 2D Array, the first dimension the week of the month and the second dimension stores the day of the week. 
Print the result as following.
*/
/*
getcal takes parameters such as starting weakday and days in month and declares an empty array and push the weeks day
and create an empty array and pushes the respected element into that and atlast returns the 2d array
*/
getCal=(d0,md)=>{
    let matrix=[];
    matrix.push(["sun","mon","tue","wed","thu","fri","sat"]);
    let k=1;
    for(i=1;i<7;i++){
        let date=[];
        for(j=0;j<7;j++){
            if(k<=md && j>=d0 ){
                if(k>9) date.push(k+' ');
                else date.push(' '+k+' '); 
                k++; d0=d0-7;
            }
            else date.push('   ');
        }
        matrix.push(date);
    }
    return matrix;
}

//import the yearmonth module
let yearMonth=require('./utility/yearMonth');
//creating a object of yearofmonth and passing moth and year
let dm=new yearMonth(parseInt(process.argv[2]),parseInt(process.argv[3]));
//get the days in month
let md=dm.getDays();
//get the starting weak of the of month
let d0=dm.getStartWeakDay();
//it will returns the 2d array of year of month
let calender=getCal(d0,md);
//to print 2d array
console.log(calender);
//to print the calender
calender.forEach(element => {
    let str='';
    element.forEach(ele=>str=str+ele+' ');
    console.log(str); 
});