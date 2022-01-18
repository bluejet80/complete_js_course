'use strict';

const jarett = {
  journalNumber: 31,
  currentYear: 2021,
  birthYear: 1980,
  firstName: 'Jarett',
  lastName: 'Young',
  jobTypes: [
    'astronaut',
    'farmer',
    'baker',
    'scientist',
    'programmer',
    'sociologist',
    'educator',
    'clerk at the liquor store',
    'ceramic artist',
    'bookbinder',
  ],
  jobDescript: {
    baker: 'bake bread',
    scientist: 'run tests',
    farmer: 'grow crops',
    artist: 'paint pictures',
  },
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
  printMessage: function (a) {
    if (a <= this.jobTypes.length) {
      let i = 0;
      while (i < a) {
        console.log(`I am a ${this.jobTypes[i]}`);
        i++;
      }
    } else {
      console.log('to many numbers...');
    }
  },
  printJobDescript: function () {
    let i = 0;
    const length = Object.keys(this.jobDescript).length;

    while (i < length) {
      const work = jarett.jobDescript[Object.keys(jarett.jobDescript)[i]];
      const job = Object.keys(jarett.jobDescript)[i];
      console.log(
        `My name is ${this.printName()}, and I am a ${job} and I ${work}`
      );
      i++;
    }
  },
};

console.log(jarett.printName());
console.log(jarett.printAge());
console.log(jarett.printJournalNumber());
jarett.printMessage(2);
jarett.printJobDescript();
