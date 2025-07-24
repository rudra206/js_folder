//12 inch = 1 feet
function inchToFeet (inch){
    const feetfrection = inch/12;
    const feetNumber = parseInt(feetfrection);
    const inchRemaining = inch % 12;
    const result =feetNumber +" ft " + inchRemaining + ' inch'
    return result;
}
const shovoHeight =inchToFeet(75);
console.log(shovoHeight);

// const shovoHeight2 =inchToFeet(75);
// console.log(shovoHeight2);
