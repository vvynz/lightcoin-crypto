

class Account {
  constructor(username) {
    this.username = username;
    this.transactions = [];
  }

  get balance() {
    // Calculate the balance using the transaction objects.
    let balance = 0;
    for (let t of this.transactions) {
      balance += t.transactions;
    }
    return balance;
  }

  addTransaction(transaction) {
    this.transactions.push(transaction);
  }
}

class Transaction { //superclass
  // pass in the account that the withdrawal is for
  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }

  commit() {
    // Keep track of the time of the transaction
    this.time = new Date();
    // Add the transaction to the account
    this.account.addTransaction(this);
  }
}


class Withdrawal extends Transaction { //subclass of Transaction
// update the balance in the account
  get value() {
    return -this.amount;
  }

}

class Deposit extends Transaction { //subclass of Transaction
// update the balance in the account
  get value() {
    return this.amount;
  }
}


// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected
const myAccount = new Account("snow-patrol");


t1 = new Withdrawal(50.25, myAccount);
t1.commit();
console.log("Current balance:", myAccount.balance);
t2 = new Deposit(500.00, myAccount);
t2.commit();
console.log("New balance:", myAccount.balance);

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
