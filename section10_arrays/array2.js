'use strict';

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

//Array method Practice

// 1.
const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(val => val > 0)
  .reduce((sum, cur) => sum + cur, 0);

console.log(bankDepositSum);

// 2.
// count how many deposits there are in the bank of at least $1000
const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  .filter(val => val >= 1000).length;

console.log(numDeposits1000);

// doing the same thing with the reduce method;
const numDepositsReduce = accounts
  .flatMap(acc => acc.movements)
  .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);

console.log(numDepositsReduce);

// 3.
// Create a new object with the reduce method
const sums = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      //cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
      sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );

console.log(sums);

// Try to replace the previous exercises with the reduce method

// 4.
// Create a functio to convert any string to title case
// this is a nice title

const convertTitleCase = function (title) {
  const capitalize = string => string[0].toUpperCase() + string.slice(1);
  const exceptions = [
    'a',
    'an',
    'and',
    'the',
    'but',
    'or',
    'on',
    'in',
    'with',
    'is',
  ];
  const newTitle = title
    .toLowerCase()
    .split(' ')
    .map(word => (exceptions.includes(word) ? word : capitalize(word)))
    .join(' ');
  return capitalize(newTitle);
};
console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title but not too long'));
console.log(convertTitleCase('and here is another title with an EXAMPLE'));

// The Map Method
// Creates a brand new array
// applies a call back function to each element of the array
// It maps the values of the original array to a whole new array.
// similar to the forEach method you have access to all the arguments,
// item, index, array
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;

const movementsUSD = movements.map(mov => mov * eurToUsd);

//console.log(movements);
//console.log(movementsUSD);

// The Filter Method
// Filters out elements that do not meet the condition
//

// The Reduce Method
// Reduce boils 'reduces' all array elements down to one single value.
// In the reduce method there is an accumulator that gets passed to the next
// iteration.
