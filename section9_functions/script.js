'use strict';

/// having Funcitons return other functions

// higher order functions, those functions that takes functions as arguments

const oneWord = function (str) {
  //callback function
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  //callback function
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

const transformer = function (str, fn) {
  // higher order function takes a callback function as a parameter
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`); // retunrs the name of the function
};

transformer('javascript is the best!', upperFirstWord);

transformer('javascript is the best!', oneWord);

const adder = function (...num) {
  //function takes an arbitrary number of arguments
  console.log(num);
  let result = 0;
  for (const item of num) {
    result += item;
  }
  console.log(`${num.join(' + ')} = ${result}`);
};

adder(23, 45, 27, 88);

// another example
const high5 = function () {
  console.log("What's up man!");
};

document.body.addEventListener('click', high5); //runs high5 when body is clicked
// high5 is a callback function

['jarett', 'harvey', 'peter'].forEach(high5);

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
