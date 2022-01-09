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
/*
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


// functions calling functions

function cutFruitPieces(fruit) {
    return fruit * 4
}


function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice made with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}
console.log(fruitProcessor(2, 3));

// coding challenge


const calcAverage = (a, b, c) => (a + b + c) / 3;

const dolphinAverage = calcAverage(80, 100, 125);
const koalasAverage = calcAverage(20, 54, 49);

const checkWinner = (avgDolphin, avgKoalas) => {
    if (avgDolphin >= avgKoalas * 2) {
        console.log(`Dolphins win (${avgDolphin} vs. ${avgKoalas})`)
    } else if (avgKoalas >= avgDolphin * 2) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphin})`);
    } else { console.log(`There are no winners.`) }
}
checkWinner(dolphinAverage, koalasAverage);

*/
/*
const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);
console.log(years);

console.log(friends[0]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jade'
console.log(friends);

const jarett = ['Jarett', 'Young', 2021 - 1980, 'programmer', friends];

console.log(jarett);

// Exercise

const calcAge3 = birthYear => 2037 - birthYear

const year2 = [1990, 1967, 2002, 2010, 2018]

const age1 = calcAge3(year2[0]);
const age2 = calcAge3(year2[1]);
const age3 = calcAge3(year2[year2.length - 1]);

console.log(age1, age2, age3);

const ages = [calcAge3(year2[0]), calcAge3(year2[1]), calcAge3(year2[year2.length - 1])];

console.log(ages);
*/

// Array Methods
/*
const friends = ['Michael', 'Steven', 'Peter'];
friends.push('Jade');
// push method returns the length of the new array.

function print(item) { console.log(item) };

print(friends);

friends.unshift('John');
print(friends);

friends.pop();
print(friends);
// the pop method returns the value of the removed item

friends.shift();
print(friends);
// the shift method returns the element that was removed

print(friends.indexOf("Steven"))

print(friends.includes('Peter'));

*/
/*
// Objects

const jarett = {
    firstName: 'Jarett',
    lastName: 'Young',
    age: 2022 - 1980,
    job: 'Programmer',
    friends: ['Tim', 'Brent', 'Andy']
}

console.log(jarett.firstName);
console.log(jarett.age);
console.log(jarett['age']);
// the bracket notation allows you to write any
// expression inside the brackets

const nameKey = 'Name';
console.log(jarett['first' + nameKey]);

// const interestedIn = prompt('What do you want to know about Jarett? Choose between')


// if (jarett[interestedIn]) {
//     console.log(jarett[interestedIn]);
// } else {
//     alert("Wrong request!")
// }

// adding things to the object

jarett.location = 'Wichita';
jarett['car'] = 'Honda CRV';

console.log(jarett);

//example
console.log(`${jarett.firstName} has ${jarett.friends.length} friends and his best friend is ${jarett.friends[2]}.`);

*/
// Object Methods
/*
const jarett = {
    firstName: 'Jarett',
    lastName: 'Young',
    birthYear: 1980,
    job: 'Programmer',
    friends: ['Tim', 'Brent', 'Andy'],
    hasDriversLicense: true,

    // calcAge: function (birthYear) {
    //     return 2037 - birthYear;
    // }

    // calcAge: function () {
    //     // console.log(this);
    //     return 2037 - this.birthYear;
    // }

    calcAge: function () {
        this.age = 2022 - this.birthYear
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
    }

}

console.log(jarett.calcAge());

// console.log(jarett['calcAge']());

console.log(jarett.age);
console.log(jarett.age);
console.log(jarett.age);

//challenge
// "Jonas is a 46-year old teacher, and he has a driver's license."

console.log(jarett.getSummary());

// coding challenge #3

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.BMI = this.mass / this.height ** 2
        return this.BMI
    },
    getSummary: function () {
        return `${this.fullName} has a BMI of ${this.calcBMI()}`
    }

}

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.BMI = this.mass / this.height ** 2
        return this.BMI
    },
    getSummary: function () {
        return `${this.fullName} has a BMI of ${this.calcBMI()}`
    }
}

console.log(mark.getSummary());
console.log(john.getSummary());

if (john.BMI > mark.BMI) {
    console.log(`${john.fullName}'s BMI ${john.BMI} is higher than ${mark.fullName}'s ${mark.BMI}!`)
} else {
    console.log(`${mark.fullName}'s BMI ${mark.BMI} is higher than ${john.fullName}'s ${john.BMI}!`)
}

// loops

for (let rep = 2; rep <= 10; rep = rep + 2) {
    let weightSize = 10 + rep;
    console.log(`Lifiting ${weightSize} weights repetition ${rep}.`)
}

// looping arrays

const ceramics = [
    'clay',
    'throw',
    'carve',
    20,
    ['bisque file', 'glaze fire'],
    true
];

const types = [];

// for (let i = 0; i < ceramics.length; i++) {
//     // reading from array
//     console.log(ceramics[i], typeof ceramics[i]);
//     // filling types array
//     types[i] = typeof ceramics[i];
//     // another way to fill
//     //types.push(typeof ceramics[i]);
// }

console.log(types);

// second exercise

const birthYears = [1991, 2007, 1969, 2020]
const ages = [];

for (let i = 0; i < birthYears.length; i++) {
    ages[i] = 2037 - birthYears[i];
}

console.log(ages);

// continue and break
// only print items of type string with continue
console.log(`-----Only strings---------`)
for (let i = 0; i < ceramics.length; i++) {
    if (typeof ceramics[i] !== 'string') continue;
    console.log(ceramics[i], typeof ceramics[i]);

}

// after a number is found break the loop with break
console.log(`-----Break w number---------`)
for (let i = 0; i < ceramics.length; i++) {
    if (typeof ceramics[i] === 'number') break;
    console.log(ceramics[i], typeof ceramics[i]);

}

*/

/*
// looping backwards
const faces = [
    'happy',
    'sad',
    15,
    'excited',
    ['eyes', 'mouth'],
    true
];

for (let i = faces.length - 1; i >= 0; i--) {
    console.log(faces[i]);
}

// creating a loop inside a loop

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`----Starting exercise ${exercise}`)
    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weights repetition ${rep}.`)
    }
}
*/
// while loops
// let rep = 1
// while (rep < 11) {
//     console.log(`Lifting weights repetition ${rep}.`)
//     rep++
// }

// another example
let dice = Math.trunc(Math.random() * 6) + 1

while (dice !== 6) {
    console.log(`You rolled a ${dice}`)
    dice = Math.trunc(Math.random() * 6) + 1
    if (dice === 6) console.log(`Loop is about to end...`)
}


// final coding challenge

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
    tips[i] = bills[i] * .20;
    totals[i] = tips[i] + bills[i];
    console.log(`The bill was $${bills[i]}, the tip was $${tips[i]}, the total bill was $${totals[i]}.`)
}

const calcAverage = function (list) {
    let sum = 0;
    for (let i = 0; i < list.length; i++) {
        sum += list[i];
    }
    return sum / list.length;
}

const billsAvg = calcAverage(bills);
console.log(`The average of the bills was ${billsAvg}.`);

const tipsAvg = calcAverage(tips);
console.log(`The average of the tips was ${tipsAvg}.`);

const totalsAvg = calcAverage(totals);
console.log(`The average of the totals was ${totalsAvg}.`);
