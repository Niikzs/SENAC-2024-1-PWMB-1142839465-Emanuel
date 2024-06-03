// Ouve o evento de carregamento do DOM para executar o código quando a página estiver completamente carregada
document.addEventListener('DOMContentLoaded', function () {
    // Obtém referências aos elementos relevantes do DOM
    const registrationForm = document.getElementById('registrationForm');
    const messageDiv = document.getElementById('message');

    // Adiciona um ouvinte de evento para o envio do formulário de registro
    registrationForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        // Obtém os valores do nome de usuário, email e senha do formulário de registro
        const username = registrationForm.username.value;
        const email = registrationForm.email.value;
        const password = registrationForm.password.value;

        // Verifica se todos os campos foram preenchidos, caso contrário, exibe uma mensagem de erro
        if (!username || !email || !password) {
            showMessage('Por favor, preencha todos os campos.');
            return;
        }

        // Obtém a lista de usuários armazenada no armazenamento local ou uma lista vazia se não houver nenhum
        const users = JSON.parse(localStorage.getItem('users')) || [];

        // Verifica se já existe um usuário com o mesmo nome de usuário ou email
        const isUserExist = users.some(user => user.username === username || user.email === email);
        if (isUserExist) { // Se o usuário já existir, exibe uma mensagem de erro
            showMessage('Usuário ou email já registrado.');
            return;
        }

        // Cria um objeto com os dados do novo usuário
        const userData = {
            username: username,
            email: email,
            password: password
        };

        // Adiciona o novo usuário à lista de usuários
        users.push(userData);

        // Atualiza a lista de usuários no armazenamento local
        localStorage.setItem('users', JSON.stringify(users));

        // Limpa os campos do formulário de registro
        registrationForm.reset();

        // Exibe uma mensagem de registro bem-sucedido
        showMessage('Registro bem-sucedido!');
    });

    // Função para exibir uma mensagem na div de mensagem
    function showMessage(message) {
        messageDiv.textContent = message;
    }
});