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

transactionsEl.addEventListener('click', function(event) {
    const clickedEl = event.target.parentNode;
    clickedEl.remove();
})