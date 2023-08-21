const pwd = document.querySelector('#user-password');
const confirmPwd = document.querySelector('#user-password-confirm');

const pwdField = document.querySelectorAll('.pwd');
const btn = document.querySelector('#submit');

pwdField.forEach(password => {
    password.addEventListener('keyup', verify);
});

function verify() {
    // verify if password is !empty
    if (pwd.value !== '') {
        confirmPwd.disabled = false;
    }

    if (confirmPwd.value !== pwd.value) {
        confirmPwd.classList.remove('verified');

        confirmPwd.classList.add('error');
    }
    else {
        confirmPwd.classList.remove('error');

        confirmPwd.classList.add('verified');
        btn.disabled = false;
    }
}