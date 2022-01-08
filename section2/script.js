'use strict';


/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log(`I can drive!`)
*/
/*
function logger() {
    console.log('My name is Jarett');
}

logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(3, 4);
console.log(appleJuice);

function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(1980);
console.log(age1);
*/

// Function Expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1991)
console.log(age2);

const calcAge3 = birthYear => 2037 - birthYear

const age3 = calcAge3(1930);
console.log(age3);

// new function

const yearUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years.`
}

console.log(yearUntilRetirement(1991, 'Jimmy'));

