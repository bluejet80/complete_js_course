'use strict';
// ------------Map

const rest = new Map();

rest.set('name', 'Jarett Ling Bistro');
rest.set(1, 'Wichita,KS');
rest.set(2, 'Hutchinson,KS');

console.log(rest);

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('closed', 23)
  .set(true, 'We are open!')
  .set(false, 'We are closed!');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('closed')));
//prints open or closed depending on the boolean relationship because the keys are boolean operators

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
