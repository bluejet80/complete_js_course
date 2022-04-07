'use strict'

// next part of the review

// ------------------------
// The new At Method

const arr = [23,11,46]

arr[0] // the old way
arr.at(0) // the new way

// this allows us to do method chaining
// and it is easier to get the last value of the array

arr.at(-1)

// this at method will also work on strings
//


// ------------------------
// The new For Each Method
// 
// this method allows us to iterate over arrays
//
// this is a higher order function that takes a callback function 
// as a parameter.

const days = 'monday tuesday wednesday thursday friday saturday sunday'.split(' ')

console.log(days)

const postDay = function(num) {
    switch (num) {
        case 1: return '1st';
        break;
        case 2: return '2nd';
        break;
        case 3: return '3rd';
        break;
        default: return `${num}th`;

        }
    }

days.forEach(function(day,num) {
    console.log(`${day} is the ${postDay(num +1)} day of the week.`)
    })

// Like most of the methods we will be looking at, The forEach method
// accepts arguments for the item, the index, and the array itself
//
// In order to do this with the For Of loop we had to do this

// for(cont [index, day] of days.entries()){}
//
// destructuring the index and the item from the array of arrays created
// by days.entries()

// also it should be noted that you CANNOT breakout of the For Each loop
//



//-----------------------
//Now we are looking at adding elements to the DOM
//
//If we have an array of data, then we can use the For Each method
//to lop over the data and display it on the page
//
//we use template literal strings to format the html and insert 
//the necessary variables with the data. 
//
//we can the assign this template literal to a variable and insert that 
//on the page using the **insertAdjacentHTML** method. And with this method
//we can designate wether the elemets will be added to the front of the
//element or to the end or just before or just after. 
//
//Syntax
//document.querySelector('.classname').insertAdjacentHTML('afterbegin',template variable)
//
//Note: you need to besure to overwrite any info that is there from the beginning
//document.querySelector('.classname').innerHtml = ''
//


//-------------------------------------------------
//---------------------------------------------------
//Data Transformation Methods
//
//MAP, FILTER, REDUCE
//
//The MAP method creates a entire new array





