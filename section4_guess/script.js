'use strict';

// console.log(document.querySelector('.message').textContent);

<<<<<<< HEAD
// document.querySelector('.message').textContent = 'You are a Jackass!';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 300;
// document.querySelector('.guess').value = 34;
// console.log(document.querySelector('.guess').value);


=======
// document.querySelector('.message').textContent = 'Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);


// defining the secret number

const secretNumber = Math.trunc(Math.random()*20) + 1;
document.querySelector('.number').textContent = secretNumber;

// define the score
let score = 20;

// button event handler
document.querySelector('.check').addEventListener('click', function() {
    const guess = Number((document.querySelector('.guess').value));
if(score > 1) {
    if(!guess) {  // when there is no input
        document.querySelector('.message').textContent = 'Please Type a Number!';
    } else if(guess === secretNumber) {  // when player wins
        document.querySelector('.message').textContent = 'Correct Number!';
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
    } else if(guess < secretNumber) {  // when guess is too low
        document.querySelector('.message').textContent = 'Guess is too Low!';
        score--
        document.querySelector('.score').textContent = score;
    } else {   // when guess is too high
        document.querySelector('.message').textContent = 'Guess is too High!';
        score--
        document.querySelector('.score').textContent = score;
    }

} else {
    score--
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = 'You Lost the Game! :-(';
    document.querySelector('body').style.backgroundColor = 'red';
}


    
});
>>>>>>> refs/remotes/origin/master
