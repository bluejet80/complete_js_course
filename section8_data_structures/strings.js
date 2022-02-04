'use strict';
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// console.log(flights.split('+'));
const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
    '_',
    ' '
  )} from ${getCode(from)} to ${getCode(to)} (${time.replace(
    ':',
    'h'
  )})`.padStart(45);
  console.log(output);
}

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

// const airline = 'TAP Air America';
// const plane = 'A320';

// //Split and Join

// console.log('a+very+nice+string'.split('+'));
// console.log('Jarett Young'.split(' '));

// const [first, last] = 'Jarett Young'.split(' ');
// console.log(first, last);

// const arr = ['Mr.', first, last.toUpperCase()].join(' ');
// console.log(arr);

// const capitalizeName = function (name) {
//   const names = name.split(' ');
//   const namesUpper = [];
//   for (const n of names) {
//     //namesUpper.push(n[0].toUpperCase() + n.slice(1));
//     namesUpper.push(n.replace(n[0], n[0].toUpperCase())); // another way
//   }
//   console.log(namesUpper.join(' '));
// };

// capitalizeName('jessica ann smith davis');
// capitalizeName('jarett young jr');
// capitalizeName('john grey williams');

// // padding a string

// const message = 'Go to gate 23!';
// console.log(message.padStart(25, '+'));
// console.log(message.padEnd(25, '+'));

// const maskCredit = function (number) {
//   const str = number + '';
//   const last = str.slice(-4);
//   return last.padStart(str.length, '*');
// };

// console.log(maskCredit(463748293009323));
// console.log(maskCredit('46349849020934'));

// // repeat method

// const alert = 'Bad weather all departures cancelled!  ';
// console.log(alert.repeat(5));

// const planesInLine = function (n) {
//   console.log(`There are ${n} planes in line.${'plane-->'.repeat(n)}`);
// };

// planesInLine(5);

// // reversing a string

// const reverse = function (word) {
//   const word1 = new String(word);
//   const word2 = [];
//   for (const n of word1) {
//     word2.unshift(n);
//   }
//   return word2.join('');
// };

// console.log(reverse('Howdy partner!'));

// const reverseSentence = function (string) {
//   const words = string.split(' ');
//   const result = [];
//   for (const word of words) {
//     result.unshift(reverse(word));
//   }
//   return result.join(' ');
// };

// console.log(reverseSentence('Every line of the story is funny'));
// console.log(
//   reverseSentence('selppa emos thguob dna yadot erots eht ot tnew I')
// );

// console.log(reverseSentence('Every line of the story is cool'));

/// split a word into letters

// const jarett = 'jarett';
// const letter = jarett.split('');

// result ['j', 'a', 'r', 'e', 't', 't']

// split a sentence into words

//console.log('I am Happy'.split(' '));

// const word1 = new String('jarett');
// const word2 = [];
// for (const n of word1) {
//   word2.unshift(n);
// }
// console.log(word2.join(''));

// // ------------ Part 2

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

// // Fix capitalization in name

// const passenger = 'jOnAS';
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// // Comparing email

// const email = 'hello@jarett.io';
// const loginEmail = '   Hello@Jarett.Io \n';
// const loginLower = loginEmail.toLowerCase();
// const trimmedEmail = loginLower.trim();
// console.log(trimmedEmail);

// /// combined into one step

// const fixedLogin = loginEmail.toLowerCase().trim();
// console.log(fixedLogin);

// console.log(email === fixedLogin);

// // replace parts of strings

// const priceGB = '288,97£';
// const priceUS = priceGB.replace('£', '$').replace(',', '.');
// console.log(priceUS);

// const announcement =
//   'All passengers come to boarding door 23. Boarding door 23!';
// console.log(announcement.replaceAll('door', 'gate'));

// //reg exp

// console.log(announcement.replace(/door/g, 'gate'));

// // Booleans
// const plane1 = 'Airbus A320neo';
// console.log(plane1.includes('A320'));
// console.log(plane1.startsWith('Air'));

// if (plane1.startsWith('Airbus') && plane1.endsWith('neo')) {
//   console.log('Part of the NEW Airbus Family!');
// }

// //Practice exercise

// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase();
//   if (baggage.includes('knife') || baggage.includes('gun')) {
//     console.log('You are NOT allowed on board!');
//   } else {
//     console.log('Welcome Aboard!');
//   }
// };

// checkBaggage('I have a laptop, some Food and a pocket Knife');
// checkBaggage('Socks and Camera');
// checkBaggage('Got some snacks and a gun for protection.');

// // ------------Part 1

// const airline = 'TAP Air America';
// const plane = 'A320';

// console.log(plane[0]);

// console.log('B737'[0]);
// console.log('B737'.length);

// console.log(airline.length);

// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));

// console.log(airline.indexOf('America'));

// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));

// // extract part of the string without knowing the string

// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// console.log(airline.slice(-2));
// console.log(airline.slice(1, -1));

// //find middle seat

// const checkMiddleSeat = function (seat) {
//   // B and E are middle seats
//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'E') console.log('You got the middle seat!');
//   else console.log('You got Lucky!');
// };

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');
