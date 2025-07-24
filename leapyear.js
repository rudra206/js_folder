function isLeapYear(year){
    if (year % 100 !== 0 && year % 4 ===0){
        return true;
    }
    else if ( year % 100 === 0 && year % 400 === 0 ){
        return true;
    }
    else{
        return false;
    }
}
const isLeap = isLeapYear(2304);
const isLeap2 = isLeapYear(2100);
const isLeap3 = isLeapYear(1900);
const isLeap4 = isLeapYear(2026);
console.log(isLeap,isLeap2,isLeap3,isLeap4);
