'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

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

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// Diplaying the transactions
// Diplaying the transactions
const displayMovements = function(movements) {
containerMovements.innerHTML = '';
movements.forEach(function(mov, i){
const type = mov > 0 ? 'deposit' : 'withdrawal'
        const html = `
<div class="movements__row">
          <div class="movements__type movements__type--${type}">${i + 1} - ${type}</div>
          <div class="movements__value">${mov}€</div>
        </div>`;
	containerMovements.insertAdjacentHTML('afterbegin',html);
	})
}

// Displaying the balance
// Displaying the balance
const calcDisplayBalance = function(acct) {
     acct.balance = acct.movements.reduce((acc,mov) => acc + mov,0);
    labelBalance.textContent = `${acct.balance}€`;
}

//Update the UI
const updateUI = function(acct) {

    //Display Movements
    displayMovements(acct.movements)

    //Display Balance
    calcDisplayBalance(acct)

    //Display Summary
    calcDisplaySummary(acct)

    }


// Diplaying the Summary
// Diplaying the Summary
const calcDisplaySummary = function(acct) {
    const incomes = acct.movements
        .filter(mov => mov > 0)
        .reduce((acc, mov) => acc + mov,0)
    labelSumIn.textContent = `${incomes}€`

    const out = acct.movements
        .filter(mov => mov < 0)
        .reduce((acc, mov) => acc + mov,0)
    labelSumOut.textContent = `${Math.abs(out)}€`

    const interest = acct.movements
        .filter(mov => mov > 0)
        .map(dep => dep * acct.interestRate/100)
        .filter(a => a >= 1)
        .reduce((acc, mov) => acc + mov,0).toFixed(2)
    labelSumInterest.textContent = `${interest}€`
    }





/// Creating usernames from the user objects
/// Creating usernames from the user objects
const createUsernames = function (accs) { // accepts an array of accounts
accs.forEach(function (acc) { // for each account of the array
	   acc.username = acc.owner // create a new property in the object
        .toLowerCase()     // assign it to the coverted string.
		.split(' ')
	    .map(name => name[0])
		.join('');
	});
};

createUsernames(accounts)


// Event Handlers
// Event Handlers

// Account variables
let currentAccount;


//login button
btnLogin.addEventListener('click', function (event) {
    event.preventDefault(); // prevent reload of page

    currentAccount = accounts.find(
    acct => acct.username === inputLoginUsername.value
    );
    console.log(currentAccount)

    if(currentAccount?.pin === Number(inputLoginPin.value)) {

    //Display UI and Mesg

    labelWelcome.textContent = `Welcome back ${currentAccount.owner.split(' ')[0]}`
    containerApp.style.opacity = 100;

    updateUI(currentAccount)
    }
    //clear the input fields
    //
    inputLoginUsername.value = inputLoginPin.value = ''

    //lose focus
    //
    inputLoginPin.blur()
})

//transfer button

btnTransfer.addEventListener('click', function(event) {
    event.preventDefault()
    const amount = Number(inputTransferAmount.value)
    const recieverAcct = accounts.find(acc => acc.username === inputTransferTo.value)
    
    inputTransferAmount.value = inputTransferTo.value = ''

    //Prelem Checks
    
    //amount needs to be positive
    //balance of current user needs to be greater than amount
    //
    if (amount > 0 &&
        recieverAcct &&
        currentAccount.balance >= amount &&
        recieverAcct.username !== currentAccount.username)
    {
        //completing the transfer
        currentAccount.movements.push(-amount)
        recieverAcct.movements.push(amount)
        updateUI(currentAccount)

        }
    })

//Loan button

// Our bank has a rule which says it only grants a loan if there is at least
// one deposit with at least 10% of the requested loan amount.
//
btnLoan.addEventListener('click', function(event) {
    event.preventDefault()

    const amount = Number(inputLoanAmount.value)
    if(amount > 0 && currentAccount.movements.some(a => a >= amount * 0.1)){
        currentAccount.movements.push(amount)
        updateUI(currentAccount)
        }
    inputLoanAmount.value = ''
    })


//close account button

btnClose.addEventListener('click', function(event) {
    event.preventDefault()

    if(inputCloseUsername.value === currentAccount.username && Number(inputClosePin.value) === currentAccount.pin){
        const index = accounts.findIndex(acct => acct.username === currentAccount.username)
        accounts.splice(index,1)
        containerApp.style.opacity = 0;
        }
    inputCloseUsername.value = inputClosePin.value= ''
    })



/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES


const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]

/// Flat and FlatMap Methods

const elephant = [[1,2,3], [4,5,6],[7,8,9]]
console.log(elephant.flat())

// the flat method will flatten an array
// you can pass a depth argument to tell it how deep to flatten the array

// Lets say we wanted the balance of all the movements of all the accounts

// put all the movments into one array with the map method

const acctMovements = accounts.map(acc => acc.movements)
console.log(acctMovements)

// Now we just flatten it and then reduce it

const totalBalance = acctMovements.flat().reduce((acc,cur) => acc + cur, 0)
console.log(totalBalance)

//Flat Map Method is just a combination of map and flat methods




/// Some and Every Methods

//console.log(movements)
//console.log(movements.includes(-130));

// the includes method tests for equality but what if we wanted to test
// for something else?
//
// With the some method we can test for some condition

const anyDeposits = movements.some(a => a > 0)
//console.log(anyDeposits)


// Every Method
// Every only returns true if all the elements in the array pass the condition

// External Call back

const pigeon = a => a < 0
//console.log(movements.some(pigeon))
//console.log(movements.filter(pigeon))


// Using the Reduce Method
//
// Adding up all the values of an array
const balance = movements.reduce((acc,cur) => acc + cur,0);
//console.log(balance)


// other stuff with the reduce method
// get the maximum value
const max = movements.reduce((acc,mov) => acc > mov ? acc : mov,movements[0]); 
//{
//if (acc > mov)
//  return acc;
//else 
//	return mov
//},movements[0])

//console.log(max)





// Using the filter Method
//
 // create an array of deposits
const deposits = movements.filter(mov => mov > 0);
const withdrals = movements.filter(mov => mov < 0);
//console.log(deposits)
//console.log(withdrals)

// Using the map Method

const movementsDescription = movements.map(
	(mov, i) => 
	`Movement ${i + 1}: You ${mov > 0 ? 'deposited':'withdrew'} ${Math.abs(mov)}`
);
//console.log(movementsDescription)









//const currencies = new Map([
//  ['USD', 'United States dollar'],
//  ['EUR', 'Euro'],
//  ['GBP', 'Pound sterling'],
//]);

//const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
//New Array Methods

let arr = ['a','b','c','d','e']

// the slice method

//console.log(arr.slice(2))
//console.log(arr.slice(2,4))
//console.log(arr.slice(-1))
//console.log(arr.slice())

// The splice method
// unlike the slice method this does change the original array

//console.log(arr.splice(2));
//console.log(arr)

// Reverse Method
// The reverse method does mutate the array as well

arr = ['a','b','c','d','e']
const arr2 = ['j','i','h','g','f'];
//console.log(arr2.reverse())
//console.log(arr2)

// Concat Method

const letters = arr.concat(arr2)
//console.log(letters);
//console.log([...arr,...arr2]); // does the same as the concat method

// Join

//console.log(letters.join(' - '));


// The New 'AT' Method
//
const arr3 = [23, 11, 64];
//console.log(arr3[0]) // old way to get value
//console.log(arr3.at(0)) // new way of getting value
//the best thing about the at method is you can chain it to other things

// getting the last value of the array
//console.log(arr3[arr3.length -1]);
//console.log(arr3.slice(-1)[0])
//console.log(arr3.at(-1))

//the at method also works on strings
//console.log('jarett'.at(4))


// The FOREACH Method

//const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
//
//
//for (const item of movements) {
//	if(item > 0) {
//		console.log(`You deposited ${item}`);
//	}else {
//		console.log(`You withdrew ${Math.abs(item)}`);
//	}
//}

//console.log('---------- ForEach ----------')
//// Now we will use the forEach method
//
//movements.forEach(function(item) {
//	if(item > 0) {
//		console.log(`You deposited ${item}`);
//	}else {
//		console.log(`You withdrew ${Math.abs(item)}`);
//	}
//})
//
//// what if we needed access to a counter variable?
//// First in the original function
//for (const [i, item] of movements.entries()) {
//	if(item > 0) {
//		console.log(`Movement ${i}: You deposited ${item}`);
//	}else {
//		console.log(`Movement ${i}: You withdrew ${Math.abs(item)}`);
//	}
//}
//
//// Now in the forEach Loop
//// not only the current element but the index and the entire array is passed to
//// the callback function
//
//movements.forEach(function(item, index, array) {
//	if(item > 0) {
//		console.log(`Movement ${index}: You deposited ${item}`);
//	}else {
//		console.log(`Movement ${index}: You withdrew ${Math.abs(item)}`);
//	}
//})
//
//// the continue and break statements WILL NOT work with the forEach loop
//
// FOREACH with Maps and Sets


//const currencies = new Map([
//  ['USD', 'United States dollar'],
//  ['EUR', 'Euro'],
//  ['GBP', 'Pound sterling'],
//]);
//
//currencies.forEach(function(value, key, map) {
//	console.log(`${key}: ${value}`)
//})
//
//// Set
//const currenciesUnique = new Set(['USD','GBP','USD','EUR','EUR']);
//console.log(currenciesUnique);
//currenciesUnique.forEach(function(value, key, map) {
//	console.log(`${key}: ${value}`);
//})
//
