'use strict'

const grapes = [1,2,3,4]

grapes.push(7)
console.log(grapes)
grapes.unshift(10)
console.log(grapes)
console.log(grapes.shift())
console.log(grapes)

console.log(grapes.includes(2))



const eggs = {
    firstName: 'Jarbo',
    hands: 14,
    thumbsPerHand: 4,
    calcThumbs: function() {
        console.log(`I ${this.firstName}, have ${this.hands * this.thumbsPerHand} thumbs.`)
        const rightHands = 5
        const calcRightHandThumbs = () => {
            console.log(`There are ${(this.hands - rightHands )*this.thumbsPerHand} right hand thumbs.`)
            }
        calcRightHandThumbs()
    }
}

//eggs.calcThumbs()

const addExpr = function(a,b) {
    if(arguments.length > 2)console.log('too many arguments!') 
    return a + b
}

console.log(addExpr(23,81));

const begel = [
    { fifName: 'Babajo',
      weekday: 'Tuesday',
      noOfKids: 8,
      favColor: 'white',
      number: 232894302
      },{
      fifName: 'Saidshe',
      weekday: 'Thursday',
      noOfKids: 14,
      favColor: 'blue',
      number: 119203029
    }]

//for (const item of begel) { console.log(item)}
begel.map(obj => obj.isHomo = true)
for (const item of begel) { console.log(item)}

const [bkid,skid] = [begel[0].noOfKids,begel[1].noOfKids]
//console.log(bkid)
//
//destucturing an array of objects
const [{weekday: day1, favColor: cars},{fifName: girl1}] = begel
console.log('Output 1')
console.log(day1,girl1,cars)

const marble = {
number: 34,
player: 'Hussain',
rank: 'Beginner',
printInfo() {
console.log(`Our first ${this.rank} player is ${this.player} with ${this.number} marbles.`) 
}
}

marble.printInfo()
