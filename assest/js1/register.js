document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (name && email && password) {
        alert('Registration successful');
        // Here you can simulate MongoDB interaction using console or temp storage
        console.log('User registered:', { name, email, password });
    } else {
        alert('Please fill in all fields.');
    }
});
