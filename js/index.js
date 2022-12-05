// step:1
document.getElementById('btn-submit').addEventListener('click',function(){
    // step: 2 get email id
    const userEmail = document.getElementById('user-email');
    const email = userEmail.value;


    const userPassword = document.getElementById('user-password');
    const password = userPassword.value;
    if(email === 'srshaim11@gmail.com' && password == 'Shaimrahman'){
        window.location.href = 'bank.html';
    }
    else{
        alert('Incorrect your email and password');
    }
})