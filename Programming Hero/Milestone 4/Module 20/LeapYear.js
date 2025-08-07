function leapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return true;
            }
            return false;
        }
        return true;
    }
    return false;
}

const myYear = 2016;
const isMyYearLeapYear = leapYear(myYear);
if (isMyYearLeapYear === true) {
    console.log(`Is my ${myYear} a leap year? \nYes`);
}
else {
    console.log(`Is my ${myYear} a leap year?\n No`);
}
    

