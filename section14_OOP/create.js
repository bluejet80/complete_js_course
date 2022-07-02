"use strict";

/////////////////////////
///Inheritance Between "Classes": Object.create

const PersonProto = {
  calcAge() {
    console.log(2010 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const jarett = Object.create(PersonProto);
jarett.init("Jarett", 1980);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

const jill = Object.create(StudentProto);
jill.init("Jill", 1999, "Computer Science");

jill.calcAge();

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}.`);
};

jill.introduce();
