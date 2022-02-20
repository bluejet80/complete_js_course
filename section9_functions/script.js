'use strict';

// the call and apply methods
// how we can set the this keyword manually and why wed want to

const delta = {
  airline: 'Delta',
  iataCode: 'DT',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    ); // when this function is ran it also adds an object to the bookings array.
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  }, // when we type just name, it makes the key name and the value that of the name parameter
};

delta.book(372, 'Jarett Young');
delta.book(993, 'Jimmy Sousa');
console.log(delta.bookings);

const book = delta.book; // using a method in another object

const eurowings = {
  airline: 'EuroWings',
  iataCode: 'EW',
  bookings: [],
  book, // this is just one way of doing it
};

eurowings.book(431, 'Randy Waters');

// same thing using the CALL method
// manually setting the this keyword

book.call(eurowings, 54, 'Tiffany Bell');
console.log(eurowings.bookings);

book.call(delta, 72, 'Tiffany Bell');
console.log(delta.bookings);

// Same thing using the APPLY Method
// it takes an array as one of its arguments
const flightData = [126, 'Kyle Younger'];
book.apply(delta, flightData);
console.log(delta.bookings);

// Call method with array as argument using the spread operator

book.call(eurowings, ...flightData);

// Using the Bind Method to manually assign the this keyword
// Bind doees not immediately call the function, instead it returns a function where
// the this keyword is bound

const bookEW = book.bind(eurowings);

bookEW(77, 'William Slater');

// /// having Funcitons return other functions

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet('whats up?');
// greeterHey('jarett');
// greeterHey('frank');

// // or we could do it all in one line
// greet('You over there')('Bob');

// //same thing but with an arrow functions

// const newGreet = greeting => name => console.log(`${greeting} ${name}`);

// newGreet('Whats your name')('Jerry');
// newGreet('Throw all the apples to')('Mark');

// // higher order functions, those functions that takes functions as arguments

// const oneWord = function (str) {
//   //callback function
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   //callback function
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// const transformer = function (str, fn) {
//   // higher order function takes a callback function as a parameter
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);
//   console.log(`Transformed by: ${fn.name}`); // retunrs the name of the function
// };

// transformer('javascript is the best!', upperFirstWord);

// transformer('javascript is the best!', oneWord);

// const adder = function (...num) {
//   //function takes an arbitrary number of arguments
//   console.log(num);
//   let result = 0;
//   for (const item of num) {
//     result += item;
//   }
//   console.log(`${num.join(' + ')} = ${result}`);
// };

// adder(23, 45, 27, 88);

// // another example
// const high5 = function () {
//   console.log("What's up man!");
// };

// document.body.addEventListener('click', high5); //runs high5 when body is clicked
// // high5 is a callback function

// ['jarett', 'harvey', 'peter'].forEach(high5);

// //  Passing Arguments: Value vs. Reference

// const flight = 'LH234';
// const jarett = {
//   fullName: 'Jarett Young',
//   passport: 4646374895,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'Lh999';
//   passenger.fullName = 'Mr. ' + passenger.fullName;

//   if (passenger.passport === 4646374895) {
//     alert('Checked in');
//   } else {
//     alert('Wrong passport');
//   }
// };

// //checkIn(flight, jarett);
// //console.log(flight);
// //console.log(jarett);

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 100000000000);
// };

// //newPassport(jarett);
// checkIn(flight, jarett);
// console.log(flight);
// console.log(jarett);

// ///// --------- Default values
// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   // ES5
//   //   numPassengers = numPassengers || 1;
//   //   price = price || 1.99;
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };

//   console.log(booking);
//   bookings.push(booking); // pushes data in oject booking to the array bookings
// };

// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', undefined, 400);
// createBooking('LH123', 9);
