// differences bewteen arrow functions and reg functions

const jarett = {
  firstName: 'Jarett',
  year: 1980,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};

jarett.calcAge();

const mary = {
  firstName: 'Mary',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);

    // const self = this;  // pre-ES6 version
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    //   // console.log(this.year >= 1981 && this.year <= 1996);
    // };
    // isMillenial();

    const isMillenial = () => {
      // post ES6 version
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    isMillenial();
  },
};

mary.calcAge();

// arguments keyword

const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
console.log(addExpr(2, 5));
console.log(addExpr(3, 5, 7, 4)); // only adds the first two

var addArrow = (a, b) => {
  //console.log(arguments); // not defined in arrow functions
  return (a = b);
};

addArrow(4, 5, 6);
