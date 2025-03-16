document.getElementById('add-money-button').addEventListener('click', function(event){
    event.preventDefault();
    const inputAmount = document.getElementById('input-amount').value;
    const inputPinNumber = document.getElementById('input-pin-number').value;
    if(inputPinNumber === "1234"){
        const currentBalance = document.getElementById('current-balance').innerText;
        const updateBalance = parseFloat(inputAmount) + parseFloat(currentBalance);
        // update the balance
        document.getElementById('current-balance').innerText = updateBalance;
    }
    else{
        alert('wrong pin number provided');
    }
})