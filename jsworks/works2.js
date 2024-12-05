//Question 1: Closure-Based Counter Implementation

function createCounter() {
    let count = 0;
  
    return {
      increment: () => {
        count++;
        console.log("Current count:", count);
      },
      decrement: () => {
        count--;
        console.log("Current count:", count);
      },
      getCount: () => {
        console.log("Current count:", count);
      }
    };
  }
  
  
  const counter1 = createCounter();
  const counter2 = createCounter();
  
  counter1.increment();
  counter1.increment();
  counter1.decrement();
  counter2.increment(); 
  counter2.decrement(); 

  //Question 2: Simulating Private Variables with Closures

  function createBankAccount() {
    let balance = 0;
    const transactions = [];
  
    return {
      deposit: (amount) => {
        balance += amount;
        transactions.push(`Deposited: $${amount}`);
        console.log(`Deposited: $${amount}`);
      },
      withdraw: (amount) => {
        if (amount <= balance) {
          balance -= amount;
          transactions.push(`Withdrawn: $${amount}`);
          console.log(`Withdrawn: $${amount}`);
        } else {
          console.log("Insufficient balance");
        }
      },
      checkBalance: () => {
        console.log("Current balance:", balance);
      },
      getTransactions: () => {
        console.log("Transaction history:", transactions);
      }
    };
  }
  
  const account = createBankAccount();
  account.deposit(1000);
  account.withdraw(200);
  account.withdraw(500);
  account.checkBalance();
  account.getTransactions();