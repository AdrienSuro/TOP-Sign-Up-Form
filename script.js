let passwordInput = document.getElementById('password') ; 
let passwordConfirm = document.getElementById('password_confirm');
let passwordField = document.getElementById('passworField');
passwordInput.addEventListener('keyup', function() {
    let password = passwordInput.value;
    let checkPassword = passwordConfirm.value;
    if (password != checkPassword) {
        let informUser = document.createElement('p');
        passwordField.insertAfter(informUser, passwordInput);
    }
})