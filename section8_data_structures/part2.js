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

/// -----------map part 2

const question = new Map([
  ['question', 'what is the best cell phone?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'You got it right!'],
  [false, 'Wrong Answer!'],
]);

console.log(question);

// convert a object to a map

const hoursMap = new Map(Object.entries(openingHours)); //convert
console.log(hoursMap);

/// iteration over maps

// Quiz App
console.log(question.get('question'));

for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

//const answer = Number(prompt('Your Answer...'));
//console.log(question.get(question.get('correct') === answer));

// convert map to array

const newArr = [...question];
console.log(...newArr.values());

// // ------------Map

// const rest = new Map();

// rest.set('name', 'Jarett Ling Bistro');
// rest.set(1, 'Wichita,KS');
// rest.set(2, 'Hutchinson,KS');

// console.log(rest);

// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('closed', 23)
//   .set(true, 'We are open!')
//   .set(false, 'We are closed!');

// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest.get(1));

// const time = 8;
// console.log(rest.get(time > rest.get('open') && time < rest.get('closed')));
// //prints open or closed depending on the boolean relationship because the keys are boolean operators

// console.log(rest.has('categories'));
// //rest.delete(2);

// // rest.set([1, 2], 'array 1');// doesnt work
// // instead
// const arr = [1, 2];
// rest.set(arr, 'array 1');

// console.log(rest);
// console.log(rest.size);
// console.log(rest.get(arr));// output array 1

// // ---------------Sets

// const orderSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Pizza',
//   'Risotto',
//   'Pasta',
//   'Pizza',
// ]);

// console.log(orderSet);

// console.log(new Set('jarett'));

// console.log(orderSet.size);

// console.log(orderSet.has('Pizza'));
// console.log(orderSet.has('Bread'));

// orderSet.add('Garlic Bread');

// orderSet.delete('Risotto');

// console.log(orderSet);

// //orderSet.clear(); // clears the set

// for (const item of orderSet) {
//   console.log(item);
// }

// // example

// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);

// // count number of different letters in string
// console.log(new Set('JarettYoung').size);
