'use strict';

const jarett = {
  journalNumber: 31,
  currentYear: 2021,
  birthYear: 1980,
  firstName: 'Jarett',
  lastName: 'Young',
  printName: function () {
    return this.firstName + ' ' + this.lastName;
  },
  printAge: function () {
    return `${this.printName()} is ${
      this.currentYear - this.birthYear
    } years old.`;
  },
  printJournalNumber: function () {
    return `${this.printName()} has ${this.journalNumber} Journals.`;
  },
};

console.log(jarett.printName());
console.log(jarett.printAge());
console.log(jarett.printJournalNumber());
