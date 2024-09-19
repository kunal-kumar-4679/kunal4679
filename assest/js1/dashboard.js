document.addEventListener('DOMContentLoaded', function() {
    const users = [
        { name: 'kunal kumar', email: 'kunal@gmail.com' },
        { name: 'sahil Smith', email: 'jadiir@gmail.com' }
    ];

    const userTable = document.getElementById('userTable');
    users.forEach(user => {
        const row = `<tr><td>${user.name}</td><td>${user.email}</td></tr>`;
        userTable.innerHTML += row;
    });
});
