let balance = 500.00;

class Withdrawal {
// pass in the account that the withdrawal is for
  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }
// update the balance in the account
  commit() {
    this.account.balance -= this.amount;
  }

}

class Deposit {
  // pass in the account that the deposit this is for
  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }
// update the balance in the account
  commit() {
    this.account.balance += this.amount;
  }
}

class Account {
  constructor(username) {
    this.username = username;
    this.balance = 0;
  }
}

// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected
const myAccount = new Account("snow-patrol");

t1 = new Withdrawal(50.25, myAccount);
t1.commit();

// t1 = new Withdrawal(50.25);
// t1.commit();
// console.log('Transaction 1:', t1);

// t2 = new Withdrawal(9.99);
// t2.commit();
// console.log('Transaction 2:', t2);

// console.log('Balance:', balance);

// t3 = new Deposit(120.00);
// t3.commit();
// console.log("Transaction 3:", t3);
