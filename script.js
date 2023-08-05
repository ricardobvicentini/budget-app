/* const balance = 2000

const balanceNumberEl = document.querySelector('.balance-number');
balanceNumberEl.textContent = balance */

/* function calculateBalance(income, expense) {
    const balance = income - expense;
    return balance;
}

const result = calculateBalance(6000, 3500);
console.log(result) */

/* const balanceEl = document.querySelector('.first-heading');
const result = document.querySelector('.balance-number')

balanceEl.addEventListener('click', () => {
    const balance = 5000 - 3000;
    result.classList.add("balance-number--special");
}) */

const transactionsEl = document.querySelector('.transactions');
const balanceNumberEl = document.querySelector('.balance-number');
const numberIncomeEl = document.querySelector('.number--income');
const numberExpensesEl = document.querySelector('.number--expenses')
const formEl = document.querySelector('.form');
const inputDescriptionEL = document.querySelector('.input--description');
const inputAmountEl = document.querySelector('.input--amount');

transactionsEl.addEventListener('click', function(event) {
    /* Remove transaction */
    const clickedEl = event.target.parentNode;
    clickedEl.remove();

    /* Update income or expenses */
    const amountEl = clickedEl.querySelector('.transaction__amount');
    const amount = +amountEl.textContent; /* Símbolo + converte string em number */

    if (amount > 0) {
      const currentIncome = numberIncomeEl.textContent;
      const updatedIncome = currentIncome - amount;
      numberIncomeEl.textContent = updatedIncome;
    } else {
        const currentExpenses = numberExpensesEl.textContent;
        const updatedExpenses = currentExpenses - amount * -1;
        numberExpensesEl.textContent = updatedExpenses;
    }

    const income = +numberIncomeEl.textContent;
    const expenses = +numberExpensesEl.textContent;
    balanceNumberEl.textContent = income - expenses;

    if (balanceNumberEl.textContent < 0) {
      balanceNumberEl.style.color = "red";
    }
    
    /* Ternary method

    balanceNumberEl.textContent < 0 ? balanceNumberEl.style.color = "red" : ''; */
})