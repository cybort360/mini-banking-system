'use strict';

const depositBtn = document.querySelector('#deposit');
const withdrawBtn = document.querySelector('#withdraw');
const checkBalanceBtn = document.querySelector('#check');
const transferBtn = document.querySelector('#transfer');
const output = document.querySelector('.output');

const accounts = {
  Olamide: { balance: 5000, name: 'Olamide' },
  Sherrgs: { balance: 3000, name: 'Sherrgs' },
};

const deposit = function () {
  const amount = Number(document.querySelector('#amount').value);

  if (amount <= 0) {
    output.textContent = 'Deposit must be greater than zero.';
    return;
  }
  accounts.Olamide.balance += amount;
  output.textContent = `₦${amount} deposited. New balance is ₦${accounts.Olamide.balance}`;
};

const withdraw = function () {
  const amount = Number(document.querySelector('#amount').value);

  if (accounts.Olamide.balance <= 0) {
    output.textContent = `Your balance is ${accounts.Olamide.balance}. Deposit first.`;
    return;
  }

  if (amount <= 0) {
    output.textContent = 'Withdrawal amount must be greater than zero';
    return;
  }

  if (amount > accounts.Olamide.balance) {
    output.textContent = `Insufficient funds, Available balance is ₦${accounts.Olamide.balance}`;
    return;
  }
  accounts.Olamide.balance -= amount;
  output.textContent = `₦${amount} withdrawn. New balance is ₦${accounts.Olamide.balance}`;
};

const checkBalance = function () {
  output.textContent = `Current balance is ₦${accounts.Olamide.balance}`;
};

const transfer = function () {
  const amount = Number(document.querySelector('#amount').value);

  const recipientName = document.querySelector('#recipient').value.trim();
  const recipientAccount = accounts[recipientName];

  if (amount <= 0) {
    output.textContent = `Transfer must be greater than zero.`;
    return;
  }

  if (accounts.Olamide.balance <= 0) {
    output.textContent = `Your balance is ₦${accounts.Olamide.balance}. Cannot transfer. Deposit first`;
    return;
  }

  if (amount > accounts.Olamide.balance) {
    output.textContent = `Insufficient balance. Available balance is ₦${accounts.Olamide.balance}`;
    return;
  }

  if (!recipientAccount) {
    output.textContent = 'Recipient not found.';
    return;
  }

  if (recipientName === 'Olamide') {
    output.textContent = 'You cannot transfer to yourself.';
    return;
  }

  accounts.Olamide.balance -= amount;
  recipientAccount.balance += amount;
  output.textContent = `₦${amount} transferred to ${recipientName}. Your new balance is ₦${accounts.Olamide.balance}. ${recipientName}'s new balance is ₦${recipientAccount.balance}`;
};

depositBtn.addEventListener('click', deposit);
withdrawBtn.addEventListener('click', withdraw);
checkBalanceBtn.addEventListener('click', checkBalance);
transferBtn.addEventListener('click', transfer);
