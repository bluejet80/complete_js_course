'use strict'

//reviewing arrays
//



let arr = ['a','b','c','d','e'];

// slice
// ------------------
arr.slice(2) // returns a new array, does not mutate the original

//console.log(arr.slice(2))
//console.log(arr.slice(2,4)) // the second arg is not included
//console.log(arr.slice(-1)) // gets the last elemet of the array
//console.log(arr.slice()) // creates a shallow copy of the array
// can also be done with the spread operator
//console.log([...arr])

//splice
// --------------
//this method returns an array and removes those elements from 
//the orginal array as well.
//console.log(arr.splice(2))
//console.log(arr)
//arr.splice(-1) // removes the last element from the array

//console.log(arr.splice(0,1)) // removed the first element
arr.push(...arr.splice(0,1)) // moves the first charcter to the end
//console.log(arr.join(' '))
arr.push(...arr.splice(0,1))
//console.log(arr.join(' '))
arr.push(...arr.splice(0,1))
//console.log(arr.join(' '))
arr.push(...arr.splice(0,1))
//console.log(arr.join(' '))

// functional programming
//  ----------------------------

const Box = (x) =>  // created my own map method
({
    map: f => Box(f(x)),
    print: () => eval(`console.log('${x.join(' ')}')`),
})

const rotateArray = a => // same thing as above but with functional programming
    Box(a)
    .map(a => a.shift())
    .map(m => a.concat(m)) // now that this returns the array
    .print()                // we can print it
                        // but then nothing is actually returned from that...

let pear = ['a','b','c','d','e'];
console.log(pear.join(' '))
const buble = rotateArray(pear)
console.log(buble)  // undefined
console.log(pear) // this is now just a shortened array


// trying to stay focused

//Reverse
// returns the changed array
// mutates the original array

let one = ['a','b','c','d','e'];
let two = ['j','i','h','g','f'];

console.log(two.reverse())
console.log(two)

//Concat

const letters = one.concat(two)
console.log(letters)
console.log([...one, ...two]) // same as concat method

// methods covered earlier
// push unshift pop shift indexOf includes
//

let flavor = 'abcdef'.split('')
console.log(flavor)

flavor.push('meatballs') // adds 'meatballs' to the end
                        // returns the length

console.log(flavor)

flavor.unshift('bread') // adds 'bread' to the begining
                        // returns the length

console.log(flavor)

flavor.pop() // removes the last element
            // returns the element that was removed

flavor.shift() // removes the first element and returns that element



