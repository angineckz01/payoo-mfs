const cashoutButton = document.getElementById('cashout-button').addEventListener('click', function(event){
    event.preventDefault();
    const inputCashoutAmount = document.getElementById('input-cashout-amount').value;
    const inputCashoutPin = document.getElementById('input-cashout-pin-number').value;
    if (inputCashoutPin === '1234'){
        // console.log('cash out successful')
        const currentBalance = document.getElementById('current-balance').innerText;
        const currentBalanceNumber = parseFloat(currentBalance);
        const inputCashoutNumber = parseFloat(inputCashoutAmount);
        const updateBalance = currentBalanceNumber - inputCashoutNumber;
        // update the balance
        document.getElementById('current-balance').innerText = updateBalance;
    }
    else{
        alert('try again later.')
    }
})