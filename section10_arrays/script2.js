'use strict'

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
	}}

//eggs.calcThumbs()

const addExpr = function(a,b) {
	if(arguments.length > 2)console.log('too many arguments!') 
	return a + b
}

console.log(addExpr(2,5));

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

const [bkid,skid] = [begel[0].noOfKids,begel[1].noOfKids]
//console.log(bkid)
//
//destucturing an array of objects
const [
	{ noOfKids: bubba},
	{ noOfKids: roxy}] = begel
//console.log(bubba, roxy)


const marble = {
	number: 34,
	player: 'Hussain',
	rank: 'Beginner',
	printInfo() {
		console.log(`Our first ${this.rank} player is ${this.player} with ${this.number} marbles.`) 
	}
}

marble.printInfo()
