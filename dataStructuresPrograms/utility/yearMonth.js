//export yearmonth class
module.exports = class YearMonth {
    constructor(m, y) {
        this.m = m;
        this.y = y;
    }
    //methods to return start day of the month
    getStartWeakDay() {
        return new Date(this.y, this.m - 1, 1).getDay()
    };
    //this method will returns the no of days in amonth
    getDays() {
        return new Date(this.y, this.m, 0).getDate()
    };
}