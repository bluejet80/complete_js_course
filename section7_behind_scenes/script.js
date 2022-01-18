'use strict';

// differences between primitives and objects

let age = 30;
let oldAge = 30;
age = 31;

console.log(age);
console.log(oldAge);

const me = {
  name: 'jarett',
  age: 41,
};

const friend = me;
friend.age = 27;

console.log('Friends', friend);
console.log('Me', me);

// the change occurs in both objects

// what if we really wanted to copy the object?

const herman = {
  firstName: 'Herman',
  lastName: 'Freidrick',
  age: 45,
};

const frank = Object.assign({}, herman);
frank.firstName = 'Frank';

console.log(herman);
console.log(frank);

// now we have two separate objects

// but this only works on the first level of the object
// it only makes a shallow copy instead of a deep clone.

// it takes an external library like Lodash to create a deep clone
