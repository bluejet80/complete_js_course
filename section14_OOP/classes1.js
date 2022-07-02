"use strict";

class Account {
  //public fields (instances)
  locale = navigator.language;

  // Private fields (instances)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // Protected
    this.#pin = pin;
    //this._movements = [];
    //this.local = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  //Public interface

  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this; // returning this will make the method chainable
  }
  withdrawl(val) {
    this.deposit(-val);
    return this;
  }

  _approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan Approved!`);
    }
  }
}

const acct1 = new Account("Jarett", "dollars", 1234);

acct1.deposit(1000);
acct1.withdrawl(2.75);
acct1.withdrawl(56.3);
acct1.requestLoan(1000);

console.log(acct1.getMovements());

console.log(acct1);
