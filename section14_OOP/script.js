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

///////////////////////////////////// ES6 Classes

// class expression
const PersonCl = class {};

// class declaration
class PersonClass {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2027 - this.birthYear);
  }
  get age() {
    return 2027 - this.birthYear;
  }

  // setting a property that already exists
  set fullName(name) {
    if (name.includes(" "))
      this._fullName = name; //setter for data validation(must use _fullName)
    else alert(`${name} is not a full name!`);
  }
  get fullName() {
    return this._fullName;
  } // thses two must be created together to get around the problem of
  // setting a property that already exists

  // static method
  static hey() {
    console.log("Hello from Person");
  }
}

const jess = new PersonClass("Jessica Smith", 1985);
const bob = new PersonClass("Robert Wilson", 1985);

console.log(jess);

jess.calcAge();

// classes are not hoisted
// classes are first class citizens
// the body of a class is always executed in strict mode

////////////////////////////// Getters and Setters

const account = {
  owner: "Jarett",
  movements: [200, 190, -50, -75, -25],
  get latest() {
    return this.movements.slice(-1).pop();
  },
  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest); //getter

account.latest = 50; // setter

console.log(account.movements);

// class getter setter

console.log(jess.age);

//getter and setter for data validation
// look back in the class

//Static Methods
// Methods that are on the constructor and not on the prototype

// constructor function

const Aircraft = function (type, passengers, topSpeed, color) {
  this.type = type;
  this.passengers = passengers;
  this.topSpeed = topSpeed;
  this.color = color;
};

const Plane = function (type, color, wingSpan, passengers, topSpeed) {
  Aircraft.call(this, type, passengers, topSpeed, color);
  this.wingSpan = wingSpan;
};

// creating a prototype method

Plane.prototype.duration = function (distance) {
  return `The flight will take ${(distance / this.topSpeed).toFixed(2, 0)}hrs`;
};

const pipper = new Plane("Pipper", "red", 20, 4, 230);

console.log(pipper.duration(500));

//creating a static method

Plane.disclaimer = function () {
  console.log("All planes must leave from Mid-Continent Airport");
};

Plane.disclaimer();
console.log(pipper);
console.log(pipper.duration(1000));

////////////////////////////Class Inheritance
// constructor functions

// First we will use constructor functions

const Helicoptor = function (type, color, passengers, topSpeed, vertLift) {
  Aircraft.call(this, type, passengers, topSpeed, color);
  this.vertLift = vertLift;
};
Helicoptor.prototype = Object.create(Plane.prototype); // its very important that this is right below the constructor function

const cobra = new Helicoptor("Cobra", "black", 6, 300, 50);

console.log(cobra);

Helicoptor.prototype.showType = function () {
  console.log(`The type of this helicopter is a ${this.type}.`);
};

cobra.showType();

console.log(cobra.duration(500));

////////////////////////////Class Inheritance
// ES6 Classes

class Auto {
  constructor(model, brand, trans, engine, color, mpg) {
    this.model = model;
    this.brand = brand;
    this.trans = trans;
    this.engine = engine;
    this.color = color;
    this.mpg = mpg;
  }
  calcFuelUsed(miles) {
    const fuelUsed = miles / this.mpg;
    return fuelUsed.toFixed(2, 0);
  }
  showDetails() {
    console.log(`This vehicle is a ${this.color} ${[
      this.brand,
      this.model,
    ].join(" ")}.
    It has a ${this.engine} engine and ${
      this.trans
    } transmission, and it gets ${this.mpg}mpg. `);
  }
}

class Car extends Auto {
  constructor(model, brand, trans, engine, color, mpg, coup, awd) {
    super(model, brand, trans, engine, color, mpg);
    this.coup = coup;
    this.awd = awd;
  }
  showCarDetails() {
    this.showDetails();
    console.log(
      `This is a Car and it ${
        this.coup ? "has two doors" : "has four doors"
      } and ${this.awd ? "is AWD" : "is not AWD"}.`
    );
  }
}

const jag = new Car("M3J4", "Jaguire", "manual", "V8", "blue", 15, true, false);

const tripMiles = 200;
console.log(
  `If we drive ${tripMiles} miles it will use ${jag.calcFuelUsed(
    tripMiles
  )} gals of gas in the ${jag.brand}.`
);

jag.showCarDetails();
