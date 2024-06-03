document.addEventListener('DOMContentLoaded', function () {
    const registrationForm = document.getElementById('registrationForm');
    const messageDiv = document.getElementById('message');
    registrationForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const username = registrationForm.username.value;
        const email = registrationForm.email.value;
        const password = registrationForm.password.value;
        if (!username || !email || !password) {
            showMessage('Por favor, preencha todos os campos.');
            return;
        }
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const isUserExist = users.some(user => user.username === username || user.email === email);
        if (isUserExist) {
            showMessage('Usuário ou email já registrado.');
            return;
        }
        const userData = {
            username: username,
            email: email,
            password: password
        };
        users.push(userData);
        localStorage.setItem('users', JSON.stringify(users));
        registrationForm.reset();
        showMessage('Registro bem-sucedido!');
    });

    function showMessage(message) {
        messageDiv.textContent = message;
    }
});