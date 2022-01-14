'use strict';

const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', function () {
    switch (i) {
      case 0:
        document.querySelector('.page1').classList.remove('hidden');
        overlay.classList.remove('hidden');
        break;
      case 1:
        document.querySelector('.page2').classList.remove('hidden');
        overlay.classList.remove('hidden');
        break;
      case 2:
        document.querySelector('.page3').classList.remove('hidden');
        overlay.classList.remove('hidden');
    }
  });
