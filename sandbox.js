'use strict';

const createBankAccount = function (accountName, initialBalance) {
  let balance = initialBalance;

  return {
    deposit(amount) {
      if (amount <= 0) {
        console.log('Deposit must be greater than zero.');
        return;
      }
      balance += amount;
      console.log(`${amount} deposited. New balance is ${balance}`);
    },

    withdraw(amount) {
      if (balance <= 0) {
        console.log(`Your balance is ${balance}. Deposit first.`);
        return;
      }

      if (amount <= 0) {
        console.log('Withdrawal amount must be greater than zero');
        return;
      }

      if (amount > balance) {
        console.log(`Insufficient funds for ${accountName}, Available balance is ₦${balance}`);
        return;
      }
      balance -= amount;
      console.log(`₦${amount} withdrawn. New balance is ₦${balance}`);
    },

    checkBalance() {
      console.log(`Current balance for ${accountName} is ₦${balance}`);
    },

    transfer(amount, recipientAccount) {
      if (amount <= 0) {
        console.log(`Transfer must be greater than zero.`);
        return;
      }

      if (balance <= 0) {
        console.log(`Your balance is ₦${balance}. Cannot transfer. Deposit first`);
        return;
      }

      if (amount > balance) {
        console.log(`Insufficient balance for ${accountName}. Available balance is ₦${balance}`);
        return;
      }

      balance -= amount;
      recipientAccount.deposit(amount);
      console.log(`₦${amount} transferred from ${accountName} to ${recipientAccount.getName()}`);
      console.log(`${accountName}'s new balance: ₦${balance}`);
      console.log(`${recipientAccount.getName()}'s new balance: ₦${recipientAccount.getBalance()}`);
    },
    getName() {
      return accountName;
    },
    getBalance() {
      return balance;
    },
  };
};

const account1 = createBankAccount('Octane', amount);
const account2 = createBankAccount('Sherrgs', amount);

account1.checkBalance();
account2.checkBalance();

account1.transfer(2000, account2);
account2.transfer(1000, account1);
