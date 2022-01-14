'use strict';

// document.querySelector('.message').textContent = 'Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

// defining the secret number

let secretNumber = Math.trunc(Math.random() * 20) + 1;

// define the score
let score = 20;
let highscore = 0;

// button event handler
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (score > 1) {
    if (!guess) {
      // when there is no input
      document.querySelector('.message').textContent = 'Please Type a Number!';
    } else if (guess === secretNumber) {
      // when player wins
      document.querySelector('.message').textContent = 'Correct Number!';
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = secretNumber;
      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
    } else if (guess < secretNumber) {
      // when guess is too low
      document.querySelector('.message').textContent = 'Guess is too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // when guess is too high
      document.querySelector('.message').textContent = 'Guess is too High!';
      score--;
      document.querySelector('.score').textContent = score;
    }
  } else {
    score--;
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = 'You Lost the Game! :-(';
    document.querySelector('body').style.backgroundColor = 'red';
    document.querySelector('.number').textContent = secretNumber;
  }
});

// implementing the Reset Button

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = null;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
});
