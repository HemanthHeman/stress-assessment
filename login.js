const form = document.getElementById('login-form');
const errorMessageElement = document.getElementById('error-message');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username === '' || password === '') {
        alert('Please enter username and password.');
        return;
    }

});