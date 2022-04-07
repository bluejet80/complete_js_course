'use strict'

// in the first example we will take the withdrawls and dep and convert them
// to us dollars nd then add them up
//



const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const createDepBal = acct =>
    acct.movements.filter(x => x > 0)
    .map(x => x * 1.1)
    .reduce((acc, item) => acc + item,0)
    .toFixed(2) // limit the number of decimals

console.log(createBal(account1))


//-----------------------------------
// The Find Method

console.log(account1.movements)

const firstWithdrawl = account1.movements.find(mov => mov < 0)

console.log(firstWithdrawl)

:
