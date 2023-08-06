const transactionsEl = document.querySelector('.transactions');
const balanceNumberEl = document.querySelector('.balance-number');
const numberIncomeEl = document.querySelector('.number--income');
const numberExpensesEl = document.querySelector('.number--expenses')
const formEl = document.querySelector('.form');
const inputDescriptionEL = document.querySelector('.input--description');
const inputAmountEl = document.querySelector('.input--amount');

/* ADICIONAR DESCRIPTION E AMOUNT */

/* É possível utilizar arrow abaixo:
const submitHandler = (event) => {} */

function submitHandler(event) {

  /* Evitar default behaviour - sem refresh */
  event.preventDefault();

  /* Pegar valor dentro dos inputs */
  const description = inputDescriptionEL.value;
  const amount = +inputAmountEl.value;

  /* Criar item no HTML - Copiar HTML a ser replicado 
  Obs.: usar crase*/
  const transactionItemHTML = `
    <li class="transaction ${amount > 0 ? 'transaction--income' : 'transaction--expense'}">
        <span class="transaction__text">${description}</span>
        <span class="transaction__amount">${amount > 0 ? '+' : ''}${amount}</span>
        <button class="transaction__btn">X</button>
    </li>
  `;

  /* Inserir HTML */
  transactionsEl.insertAdjacentHTML("beforeend", transactionItemHTML);

  /* Limpar inputs */

  inputDescriptionEL.value = "";
  inputAmountEl.value = "";
  inputDescriptionEL.focus(); /* Voltar foco para o input Description 
  Para retirar foco, utilizar blur() */

  /* Atualizar income e expenses */

  if (amount > 0) {
    const currentIncome = +numberIncomeEl.textContent;
    const updatedIncome = currentIncome + amount;
    numberIncomeEl.textContent = updatedIncome;
  } else {
    const currentExpenses = +numberExpensesEl.textContent;
    const updatedExpenses = currentExpenses + amount * -1;
    numberExpensesEl.textContent = updatedExpenses;
  }

  /* Atualizar Balance */

  const income = +numberIncomeEl.textContent;
  const expenses = +numberExpensesEl.textContent;
  const updatedBalance = income - expenses;
  balanceNumberEl.textContent = updatedBalance;

  if (balanceNumberEl.textContent < 0) {
    balanceNumberEl.style.color = "red";
  }

}

formEl.addEventListener('submit', submitHandler);

/* ----------------- */

/* É possível utilizar arrow abaixo:
const clickHandler = (event) => {} */

function clickHandler(event) {
      const clickedEl = event.target.parentNode;
    clickedEl.remove();

    /* Atualizar income e expenses */
    const amountEl = clickedEl.querySelector('.transaction__amount');
    const amount = +amountEl.textContent; /* Símbolo + converte string em number */

    if (amount > 0) {
      const currentIncome = +numberIncomeEl.textContent;
      const updatedIncome = currentIncome - amount;
      numberIncomeEl.textContent = updatedIncome;
    } else {
        const currentExpenses = +numberExpensesEl.textContent;
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
}

transactionsEl.addEventListener('click', clickHandler)
