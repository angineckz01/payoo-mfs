document.getElementById('login-button').addEventListener('click', function(event){
    event.preventDefault();
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    // console.log(phoneNumber, pinNumber);
    if(phoneNumber === '01' && pinNumber ==="1234"){
        console.log('You are logged in.')
        window.location.href="../home.html";
    }
    else{
        alert('wrong phone number or pin');
    }
})