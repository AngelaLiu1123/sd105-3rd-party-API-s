const options = { year: 'numeric', month: 'short', day: 'numeric' };

class TransactionList {
  constructor() {
    this.incomeList = [];
    this.expenseList = [];
    this.id = 0;
  }

  addNewTransaction(description, amount) {
    if (amount > 0) {
      this.incomeList.push(new Transaction(description, amount, this.id++));
    } else {
      this.expenseList.push(new Transaction(description, amount, this.id++));
    }
    this.render();
  }

  removeTransaction(id) {
    this.incomeList = this.incomeList.filter(income => income.id !== +id);
    this.expenseList = this.expenseList.filter(expense => expense.id !== +id);
    this.render();
  }

  render() {
    let totalIncome, totalExpense, totalPCT, total = 0;
    // render total budget
    totalIncome = this.incomeList
      .reduce((total, income) => total + (+income.amount), 0)
      .toFixed(2);
    budgetIncomeValueEle.innerHTML = `+ $${totalIncome.replace(/[^0-9d.]/g, '')}`;

    totalExpense = this.expenseList
      .reduce((total, expense) => total + (+expense.amount), 0)
      .toFixed(2);
    budgetExpensesValueEle.innerHTML = `- $${totalExpense.replace(/[^0-9d.]/g, '')}`;

    totalPCT = Math.abs((totalExpense / totalIncome)).toFixed(2) * 100;
    budgetExpensesPCTEle.innerHTML = +totalExpense === 0
      ? `$0.00%`
      : +totalIncome === 0 ? `%`
        : `${totalPCT.toFixed(0)}%`;

    total = (+totalIncome) + (+totalExpense);
    if (total === 0) {
      budgetValueEle.innerHTML = '$0.00';
    } else {
      budgetValueEle.innerHTML = total > 0
        ? `+ $${Math.abs(total).toFixed(2)}`
        : `- $${Math.abs(total).toFixed(2)}`;
    }

    // render income items
    incomeListEle.innerHTML = '';
    this.incomeList.forEach(income => {
      incomeListEle.insertAdjacentHTML('beforeend',
        `<div class="item" data-transaction-id=${income.id}>
      <div class="item__description">${income.description}</div>
      <div class="right">
        <div class="item__value">+ $${income.amount.replace(/[^0-9d.]/g, '')}</div>
        <div class="item__delete">
          <button class="item__delete--btn">
            <i class="ion-ios-close-outline"></i>
          </button>
        </div>
      </div>
      <div class="item__date">${income.date}</div>
    </div>
      `);
    });

    // render expense items
    expensesListEle.innerHTML = '';
    this.expenseList.forEach(expense => {
      expensesListEle.insertAdjacentHTML('beforeend',
        `<div class="item" data-transaction-id=${expense.id}>
      <div class="item__description">${expense.description}</div>
      <div class="right">
        <div class="item__value">- $${expense.amount.replace(/[^0-9d.]/g, '')}</div>
        <div class="item__percentage">${+totalIncome === 0 ? '' :(Math.abs((expense.amount / totalIncome)) * 100).toFixed(0)}%</div>
        <div class="item__delete">
          <button class="item__delete--btn">
            <i class="ion-ios-close-outline"></i>
          </button>
        </div>
      </div>
      <div class="item__date">${expense.date}</div>
    </div>
      `);
    });
  }
}

class Transaction {
  constructor(description, amount, id) {
    this.description = description;
    this.amount = amount;
    this.date = new Date().toLocaleDateString('en-CA', options);
    this.id = id;
  }
}