'use strict';

const openingHours = {
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
};

const restaurant = {
  busiName: 'Giodorno Italian Bistro',
  location: '4455 E 21st St, Wichita, KS 67213',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours,

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    // ---------------------destructuring the object in the function
    starterIndex = 0, // adding default values
    mainIndex = 0,
    address,
    time = '20:00',
  }) {
    console.log(
      `Order Received at ${time}: ${this.starterMenu[starterIndex]}, ${this.mainMenu[mainIndex]}, delivered to ${address}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1} ,${ing2} , and ${ing3}.`);
  },

  orderPizza: function (mainIngredient, ...otherInredients) {
    console.log(mainIngredient);
    console.log(otherInredients);
  },
};

// ------------------Looping through Objects

// Getting the property NAMES

const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;

for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

// Getting the property VALUES

const values = Object.values(openingHours);
console.log(values);

// Getting the ENTRIES(the whole object)

const entries = Object.entries(openingHours);
console.log(entries);

// now we can loop through our object as if it were an array

for (const [day, { open, close }] of entries) {
  console.log(`On ${day}, we open at ${open} and close at ${close}`);
}

// /// ----------------Optional Chaining

// if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open); //undefined
// if (restaurant.openingHours.fri) console.log(restaurant.openingHours.fri.open);

// // We can use optional chaining to determine if elements of an object exist

// console.log(restaurant.openingHours.mon?.open); // just add the question mark

// // another example
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (const item of days) {
//   const open = restaurant.openingHours[item]?.open ?? 'closed';
//   console.log(`On ${item}, we open at ${open}.`);
// }

// // optional chaining on Methods

// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
// console.log(restaurant.orderFucacia?.(0, 1) ?? 'Method does not exist'); // method does not exist

// // optional chaining on Arrays

// const users = [{ uName: 'Jarett', email: 'jarett@linux.com' }];
// console.log(users[0]?.uName ?? 'User does not exist');
// console.log(users[1]?.uName ?? 'User does not exist');

// // ---------------- Enhanced Object Literals
// // ES6 introduced 3 ways to write object literals

// const system = {
//   title: 'Linux',
//   version: '4.3.23',
//   installed: true,
// };

// const computer = {
//   keyboard: true,
//   mouse: 'wireless',
//   ssd: 1500,
//   system, //include system in computer (enhance way #1)
//   // new way of writing function methods (enhance way #2)
//   calFreeSpace(used) {
//     return this.ssd - used;
//   },
// };

// const freeSpace = computer.calFreeSpace(100);
// console.log(freeSpace);

// // third enhancement is to be able to calculate the key names.

// const weekDays = ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun'];

// const hours = {
//   [weekDays[3]]: {
//     open: 12,
//     close: 22,
//   },
//   [weekDays[4]]: {
//     open: 11,
//     close: 23,
//   },
//   [`Day-${10 - 4}`]: {
//     /// any expression can go here
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };

// console.log(hours);

// ///--------- the For Of Loop

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(`Delicious ${item}`);

// // --- getting the index

// for (const item of menu.entries()) console.log(`${item[0] + 1}: ${item[1]}`);

// // good but this is the old way of doing it
// // lets use destructuring to get a better result.

// for (const [number, item] of menu.entries())
//   console.log(`${number + 1}: ${item}`);

// const rest1 = {
//   nameIs: 'Capri',
//   numGuests: 13,
// };

// const rest2 = {
//   nameIs: 'Capri',
//   owner: 'Jarett Young',
// };

// // rest2.numGuests = rest1.numGuests || 10;
// // rest2.numGuests = rest2.numGuests || 10;

// //--------------------OR assignment operator
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// //--------------------nullish assignment operator
// // rest1.numGuests ??= 10
// // for when the value is zero

// // -------------------And assignment operator
// rest1.owner &&= 'Anonymous';
// rest2.owner &&= 'Anonymous';

// //assigns a value to a variable if it is truthy
// // if rest1.owner exists assign this value to it. if not do nothing

// console.log(rest1);
// console.log(rest2);

// //-------------------Nullish colescing operator ??

// restaurant.numGuests = 0;

// const guests2 = restaurant.numGuests ?? 10;
// console.log(guests2);

// // -----------------------Short Circuiting the and and or operators
// console.log('---- or -----');
// //logical operators can use ANY data type, return ANY datatype

// console.log(3 || 'Jonas');

// console.log(0 || 'Jarett');

// //-------------------------setting default values

// restaurant.numGuests = 23;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// console.log('---- and ---');

// console.log(0 && 'Jarett');
// console.log(5 && 'Jarett');

// //-----------------------checking to see if a value exists and if it does run the funciton

// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

// // --------------------------rest pattern and rest parameter

// //--------------------------1)Destructuring

// //-----------------------SPREAD, beacuse it is on the RIGHT side of the equals sign
// const arr = [3, 5, ...[3, 10]];

// //----------------------REST, because it is on the LEFT side of the equals sign
// const [a, b, ...others] = [2, 3, 6, 9];

// console.log(a, b, others);

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];

// console.log(pizza, risotto, otherFood);

// // -------------------------------Objects with rest operator
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// //-------------------2)Functions

// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };

// add(2, 3);
// add(13, 24, 3, 8);

// const x = [3, 5, 12];
// add(...x);

// restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');

// spread operator on objects

// // ---------------------------copy the resturant object and add elements
// const newResturant = {
//   ...restaurant,
//   founder: 'Jarett Young',
//   customersPerYear: '329',
// };

// console.log(newResturant);

// // ---------------------------------copy resturant object and change a value

// const restaurantCopy = { ...restaurant };
// restaurantCopy.busiName = "Jarett's Italian Bistro";
// console.log(restaurantCopy);

// ----------------------create a array with prompts
// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ];

// restaurant.orderPasta(...ingredients);

// -----------------------spread operator

// const arr = [7, 8, 9];

// const badNewArray = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArray);

// const newArray = [1, 2, ...arr];
// console.log(newArray);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];

// console.log(newMenu);

// // -------------------------------copy array

// const mainMenuCopy = [...restaurant.mainMenu];

// // -------------------join two or more arrays

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// console.log(menu);

// //  ------------------------------------
// //----------------------------destructuring objects

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: '1245 Lucielle',
//   starterIndex: 3,
// });

/// -----------------------------destructuring Objects

// const { busiName, openingHours, categories } = restaurant;

// console.log(busiName, openingHours, categories);

// const { busiName: title, openingHours: hours, categories: tags } = restaurant;

// console.log(title, hours, tags);

// // -------------------------default values

// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // -------------------------------mutating variables in objects

// let a = 111;
// let b = 999;
// console.log(a, b);

// const tent = { a: 23, b: 7, c: 14 };

// ({ a, b } = tent);
// console.log(a, b);

// //------------------------------nested objects

// const {
//   fri: { open: o, close: c },
// } = openingHours;

// //console.log(fri);
// console.log(o, c);

// // ---------------------------------

// const arr = [3, 5, 8];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(y, z);
// console.log(arr);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// [main, secondary] = [secondary, main]; //swapping variables

// console.log(main, secondary);

// // ----------------------------receive 2 return values from a function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// const restName = restaurant.name;
// console.log(`Welcome to ${restName}!`);

// // ------------------------------------nested arrays

// const nested = [2, 4, [5, 20]];

// // const [i, , j] = nested;

// // console.log(j);

// const [i, , [j, k]] = nested;

// console.log(i, j, k);

// // --------------------------------Default values

// const [p = 1, q = 1, r = 1] = [13, 28];

// console.log(p, q, r);
