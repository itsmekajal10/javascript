var checkLeapYear= function (leapYear){
    if (leapYear%4==0 && leapYear%100!=0) {
        console.log(`${leapYear}:-Year is a leap year`);
    } else {
        if (leapYear==undefined || isNaN(leapYear)) {
            console.log(`${leapYear}:-Invalid input`);
        } else {
            console.log(`${leapYear}:-Year is not a leap year`);
        }
    }
    }
    checkLeapYear("2020");
    checkLeapYear("1999");
    checkLeapYear("1600");
    checkLeapYear("2022");
    checkLeapYear("1945");
    checkLeapYear("null");
    checkLeapYear("Twenty Twenty");
    checkLeapYear(undefined);
    checkLeapYear(NaN);
    checkLeapYear(1750);