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

// forEach Method

const items = [5, 2, 6, 1];
const newArray = [];
items.forEach(item => {
  newArray.push(item * 34);
});
console.log(newArray);

// filter Method
let toe;
toe = 6;
const pizza = [2 * toe, 3 / toe, toe, 10 * toe];

console.log(pizza);

console.log(Math.floor(19.34));
