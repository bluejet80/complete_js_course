"use strict";
/*
const obj1 = {
  type: "house",
  address: "342 E. Fern St",
  width: 24,
  height: 56,
  length: 127,
  calcVolume: function () {
    console.log(
      `Volume equals ${this.width * this.height * this.length}ft squared.`
    );
  },
};

// Constructor Function
const Person = function (name, birthyear) {
  this.name = name;
  this.birthyear = birthyear;

  // Never add a method to a constructor function
};

const jarett = new Person("Jarett", 1980);
console.log(jarett);

// Steps that occur when a new instance is created
// 1. New blank object {} is created
// 2. constructor function is called filling the {} object, this keyword is assigned to {} object
// 3. {} is linked to prototype
// 4. function automatically returns filled object

const fred = new Person("Fred", 1957); // creating an instance of Person
const joline = new Person("Joline", 1999);

console.log(jarett instanceof Person);

// Prototypes
console.log(jarett.__proto__);

Person.prototype.calAge = function () {
  console.log(2037 - this.birthyear);
};

jarett.calAge();

Person.prototype.species = "Homo Sapiens";

console.log(jarett.species);

console.log(jarett.hasOwnProperty("name"));
console.log(jarett.hasOwnProperty("species"));

const arr1 = [3, 5, 7, 10, 1, 5, 7, 3, 20];

// you can add a new method to the Array.prototype like this

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr1.unique());

const h1 = document.querySelector("h1");

*/

// ES6 Classes

// class expression
const PersonC2 = class {};

// class declaration
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2027 - this.birthYear);
  }
}

const jess = new PersonCl("Jessica", 1985);

console.log(jess);

jess.calcAge();

// classes are not hoisted
// classes are first class citizens
// the body of a class is always executed in strict mode
