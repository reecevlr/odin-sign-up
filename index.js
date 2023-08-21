const pwd = document.querySelector('#user-password');
const confirmPwd = document.querySelector('#user-password-confirm');
const btn = document.querySelector('#submit');

confirmPwd.addEventListener('keyup', function(e) {
    if (confirmPwd.value !== pwd.value) {
        confirmPwd.classList.add('error');
        // confirmPwd.setAttribute('isValid', false);
    }
    else {
        confirmPwd.classList.remove('error');
        // confirmPwd.setAttribute('isValid', true);
    }
});
