
document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault(); 


    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const terms = document.getElementById('terms').checked;

    
    if (!terms) {
        Swal.fire('Error', 'Please agree to the terms & conditions.', 'error');
        return;
    }

  
    Swal.fire({
        title: 'Success!',
        text: 'Your form has been submitted.',
        icon: 'success',
        confirmButtonText: 'OK'
    });

   
    document.getElementById('registrationForm').reset();
});


document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); 

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

   
    if (!email || !password) {
        Swal.fire('Error', 'Please enter both email and password.', 'error');
        return;
    }

 
    Swal.fire({
        title: 'Login Successful!',
        text: 'You have successfully logged in.',
        icon: 'success',
        confirmButtonText: 'OK'
    });

    document.getElementById('loginForm').reset();
});


document.getElementById('showLogin').addEventListener('click', function() {
    document.querySelector('.form-box').style.display = 'none'; 
    document.getElementById('loginBox').style.display = 'block'; 
});

document.getElementById('showRegister').addEventListener('click', function() {
    document.getElementById('loginBox').style.display = 'none'; 
    document.querySelector('.form-box').style.display = 'block'; 
});
