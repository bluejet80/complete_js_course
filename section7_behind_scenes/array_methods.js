'use strict';

// Array Methods

// Map Method

const wheel = [5, 2, 6, 9];
const result = wheel.map(item => {
  return item * 2;
});

console.log(result);

const tarry = ['sweet', 'hash', 'dirty', 'salty'];
const pickle = tarry.map(a => {
  return a + 'pickle';
});

console.log(pickle);

// another example

const slide = [9, 4, 2, 23];

const banana = age => age < 18;

console.log(slide.map(a => banana(a)));

// forEach Method

const items = [5, 2, 6, 1];
const newArray = [];
items.forEach(item => {
  newArray.push(item * 34);
});
console.log(newArray);

// filter Method

console.log('filter method');

const hat = [4, 3, 6, 8, 2, 7, 14, 9, 1];

const evenValue = hat.filter(current => current % 2 == 0);

console.log(evenValue);

// variables inside arrays
let toe;
toe = 12;
const pizza = [2 * toe, 3 / toe, toe, 10 * toe];

console.log(pizza);

console.log(Math.floor(19.34));

// reduce method

const bagel = ['happy', 'late', 'birthday', 'Jerry'];

// combines all the elements of the strings
const creamCheese = bagel.reduce((adder, current) => {
  console.log(adder, current);
  return (adder += ' ' + current);
}, 'Look man,');

console.log(creamCheese);

// the find method

const orange = ['apple', 'blueberry', 'orange', 'guava'];

const fruit = orange.find(a => a === 'guava');

console.log(fruit);

// the some method

const airplane = ['wheels', 'engine', 'wings', 'seats'];

const hasWheels = airplane.some(a => a === 'wings');

console.log(hasWheels);

// combination of methods

const blimp = [1, 2, 3, 4, 5, 6, 7, 8];

const hatTrick = blimp.filter(a => a % 2 == 0).map(b => b * 10);

console.log(hatTrick);

// print values in an array
console.log(blimp.join(','))


