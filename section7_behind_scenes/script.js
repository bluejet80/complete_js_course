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

    const self = this;
    const isMillenial = function () {
      console.log(self);
      console.log(self.year >= 1981 && self.year <= 1996);
      // console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },
};

mary.calcAge();
