'use strict';

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

// newPassport(jarett);
// checkIn(flight, jarett);
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
//   bookings.push(booking);
// };

// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', undefined, 400);
// createBooking('LH123', 9);
