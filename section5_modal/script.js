'use strict';

// variables
const modal = document.querySelectorAll('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelectorAll('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

// open event listeners
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', function () {
    switch (i) {
      case 0:
        document.querySelector('#page1').classList.remove('hidden');
        overlay.classList.remove('hidden');
        break;
      case 1:
        document.querySelector('#page2').classList.remove('hidden');
        overlay.classList.remove('hidden');
        break;
      case 2:
        document.querySelector('#page3').classList.remove('hidden');
        overlay.classList.remove('hidden');
    }
  });

// function for close event listeners
const closeModal = function () {
  for (let i = 0; i < modal.length; i++) modal[i].classList.add('hidden');
  overlay.classList.add('hidden');
};

// close event listeners
for (let i = 0; i < btnCloseModal.length; i++)
  btnCloseModal[i].addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

// Setting up ESC Key functionality

document.addEventListener('keydown', function (e) {
  for (let i = 0; i < modal.length; i++) {
    if (e.key === 'Escape' && !modal[i].classList.contains('hidden'))
      closeModal();
  }
});
