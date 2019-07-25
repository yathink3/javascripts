/********************************************************************************************************************
* @Execution : default node : cmd> calenderQueue.js
* @Purpose : to study the data structures
* @description :Create the Week Object having a list of WeekDay objects each storing the day (i.e S,M,T,W,Th,..) and the Date (1,2,3..) . 
                The WeekDay objects are stored in a Queue implemented using Linked List. Further maintain also a Week Object in a Queue to finally display the Calendar
                Note - If a particular day has no date then the date is set as empty string and add it to queue.
* @overview : Simple Calender using Queue
* @author : yathin k <yathink3@gmail.com>
* @version : 1.0
* @since : 24-july-2019
*******************************************************************************************************************/



/*
quecal takes parameters such as starting weakday and days in month and an week array of queue and then assaigning all fist que to weekday 
assigning days to respects to the queue and atlast returns the array of queue 
*/
queueCal = (d0, md, week) => {
    let arr = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
    arr.forEach((ele, i) => week[i].insert(ele));
    let k = 1;
    for (i = 1; i < 7; i++) {
        for (j = 0; j < 7; j++) {
            if (k <= md && j >= d0) {
                if (k > 9) week[j].insert(k + ' ');
                else week[j].insert(' ' + k + ' ');
                k++;
                d0 = d0 - 7;
            } else week[j].insert('   ');
        }
    }
    return week;
}

//importing yearmonth module
let yearMonth = require('./utility/yearMonth');
//importing Queue class module
let Queue = require('./utility/queue');
//creating a object of yearofmonth and passing moth and year
let dm = new yearMonth(parseInt(process.argv[2]), parseInt(process.argv[3]));
//get the days in month
let md = dm.getDays();
//get the starting weak of the of month
let d0 = dm.getStartWeakDay();
//creating an empty array
let queArr = [];
//creating 7 rows of queue
for (i = 0; i < 7; i++) queArr.push(new Queue());
//queuecal function will returns the que format of calender
let week = queueCal(d0, md, queArr);
//it is to display the array formate of queue
week.forEach(ele => console.log(ele.getArray()));
//displaying calender format of array of queue
week.forEach(ele => {
    let str = '';
    week.forEach(e => str = str + e.delete() + ' ')
    console.log(str);
})