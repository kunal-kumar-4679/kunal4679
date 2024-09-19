document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email && password) {
        alert('Login successful');
        // Simulate MongoDB Shell authentication query here
        console.log('User login:', { email, password });
    } else {
        alert('Please fill in all fields.');
    }
});
