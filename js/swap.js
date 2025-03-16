document.getElementById('show-cash-out-button').addEventListener('click', function(){
    const cashoutForm = document.getElementById('cashout-form');
    const addMoneyForm = document.getElementById('add-money-form');
    cashoutForm.classList.remove('hidden');
    addMoneyForm.classList.add('hidden');
})
document.getElementById('show-add-money-button').addEventListener('click', function(){
    const cashoutForm = document.getElementById('cashout-form');
    const addMoneyForm = document.getElementById('add-money-form');
    addMoneyForm.classList.remove('hidden');
    cashoutForm.classList.add('hidden');
})
