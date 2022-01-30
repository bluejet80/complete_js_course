'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  shopName: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

const { shopName, openingHours, categories } = restaurant;

console.log(shopName, openingHours, categories);

// Working with nested objects

const { fri } = openingHours;
console.log(fri); // this returns an object

// if we want to assign the actual values to variables
const {
  fri: { open, close },
} = openingHours;
console.log(open, close);

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// ARRAY DESTRUCTURING

// const array1 = [1, 2, 3];
// const a = array1[0];
// const b = array1[1];
// const c = array1[2];

// const [x, y, z] = array1;

// console.log(x, y, z);

// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// // nested destructuring
// const nested = [2, 4, [5, 6]];

// const [i, , [j, k]] = nested;

// console.log(i, j, k);

// // default values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// OBJECT DESTRUCTURING

//using an object to change variables

let bun = 123;
let dog = 456;
console.log(bun, dog);

let garden = { carrots: 34, b: 66, c: 33 }; // object

//destructuring an object into variables
let { carrots: fred, b: jane, c: jimmy } = garden;
console.log(fred, jane, jimmy);

// using an object to change variables
({ carrots: bun, b: dog } = garden);
console.log(bun, dog);

//if the variables are the same as the keys in the object
let carrots = 303;
let b = 72;
({ carrots, b } = garden);
console.log('printing carrots');
console.log(carrots, b);

// changing the values of an object

// adds 'a' key:value changes 'b' value
Object.assign(garden, { a: 230 }, { b: 200 });
console.log(garden);

//changes a and b
garden = { ...garden, a: 1, b: 2 };
console.log(garden);

bun = 980;
dog = 56;
console.log(bun, dog);

// again changes a and b
garden = { ...garden, a: bun, b: dog };
console.log('garden');
console.log(garden);
