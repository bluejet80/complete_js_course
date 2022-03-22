'use strict'

// The Map Method
// Creates a brand new array 
// applies a call back function to each element of the array
// It maps the values of the original array to a whole new array.
// similar to the forEach method you have access to all the arguments, 
// item, index, array
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]
const eurToUsd = 1.1

const movementsUSD = movements.map(mov => mov * eurToUsd)

console.log(movements);
console.log(movementsUSD);


// The Filter Method
// Filters out elements that do not meet the condition
//


// The Reduce Method
// Reduce boils 'reduces' all array elements down to one single value. 
// In the reduce method there is an accumulator that gets passed to the next
// iteration. 
