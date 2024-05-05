const form = document.getElementById('login-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validate username and password
    if (username === '' || password === '') {
        alert('Please enter username and password.');
        return;
    }

    // Send login request to backend (e.g., using AJAX)
    // ...

    // Handle successful login
    // ...
});