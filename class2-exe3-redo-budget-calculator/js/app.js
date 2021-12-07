const addBtnEle = document.querySelector('.add__btn');
const textInputEle = document.querySelector('.add__description');
const numberInputEle = document.querySelector('.add__value');

const budgetValueEle = document.querySelector('.budget__value');
const budgetIncomeValueEle = document.querySelector('.budget__income--value');
const budgetExpensesValueEle = document.querySelector('.budget__expenses--value');
const budgetExpensesPCTEle = document.querySelector('.budget__expenses--percentage');

const incomeListEle = document.querySelector('.income__list');
const expensesListEle = document.querySelector('.expenses__list');
const containerEle = document.querySelector('.container');
// Date.toLocaleDateString(locale, option)
addBtnEle.addEventListener('click', handleAddTransaction);
containerEle.addEventListener('click', handleRemoveTransaction);

function handleAddTransaction(e) {
  if (textInputEle.value !== '' && numberInputEle.value !== '' && +numberInputEle.value !== 0) {
    const description = textInputEle.value;
    const amount = numberInputEle.value;
    myTransactionList.addNewTransaction(description, amount);
  }
  textInputEle.value = '';
  numberInputEle.value = '';
}

function handleRemoveTransaction(e) {
  if (e.target.classList.contains('ion-ios-close-outline')) {
    const id = e.target.closest('.item').dataset.transactionId;
    myTransactionList.removeTransaction(id);
  }
}

function getDateAndYear() {
  titleMonthEle = document.querySelector('.budget__title--month');
  titleMonthEle.innerHTML = new Date().toLocaleDateString('en-CA', { year: 'numeric', month: 'long'});
}

const myTransactionList = new TransactionList();
getDateAndYear();