// Ouve o evento de carregamento do DOM para executar o código quando a página estiver completamente carregada
document.addEventListener("DOMContentLoaded", function () {
    // Obtém referências aos elementos relevantes do DOM
    const loginLink = document.getElementById("loginLink");
    const registerLink = document.getElementById("registerLink");
    const logoutButton = document.getElementById("logoutButton");
    const ticketForm = document.getElementById("ticketForm");
    const loginPrompt = document.getElementById("loginPrompt");

    // Função para verificar o status de login do usuário
    function checkLoginStatus() {
        // Obtém o usuário logado do armazenamento local
        const loggedInUser = localStorage.getItem("loggedInUser");
        if (loggedInUser) { // Se um usuário estiver logado
            // Esconde os links de login e registro
            loginLink.style.display = "none";
            registerLink.style.display = "none";
            // Exibe o botão de logout, o formulário de ticket e esconde a mensagem de prompt de login
            logoutButton.style.display = "block";
            ticketForm.style.display = "block";
            loginPrompt.style.display = "none";
        } else { // Se nenhum usuário estiver logado
            // Exibe os links de login e registro
            loginLink.style.display = "inline";
            registerLink.style.display = "inline";
            // Esconde o botão de logout, o formulário de ticket e exibe a mensagem de prompt de login
            logoutButton.style.display = "none";
            ticketForm.style.display = "none";
            loginPrompt.style.display = "block";
        }
    }

    // Verifica o status de login ao carregar a página
    checkLoginStatus();

    // Adiciona um ouvinte de evento para o botão de logout
    logoutButton.addEventListener("click", function () {
        // Remove o usuário logado do armazenamento local
        localStorage.removeItem("loggedInUser");
        // Atualiza o status de login
        checkLoginStatus();
        // Redireciona para a página inicial
        window.location.href = "index.html";
    });

    // Adiciona um ouvinte de evento para o envio do formulário de ticket
    ticketForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        // Obtém os valores do nome, assunto e ticket do formulário
        const nome = document.getElementById('nome').value;
        const assunto = document.getElementById('assunto').value;
        const ticket = document.getElementById('ticket').value;

        // Cria um objeto com os dados do ticket
        const data = {
            nome: nome,
            assunto: assunto,
            ticket: ticket
        };

        // Obtém a lista de tickets do armazenamento local ou uma lista vazia se não houver nenhum
        let tickets = JSON.parse(localStorage.getItem('tickets')) || [];

        // Adiciona o novo ticket à lista de tickets
        tickets.push(data);

        // Atualiza a lista de tickets no armazenamento local
        localStorage.setItem('tickets', JSON.stringify(tickets));

        // Limpa os campos do formulário de ticket
        document.getElementById('ticketForm').reset();

        // Exibe uma mensagem de confirmação de sucesso
        const confirmationMessage = document.getElementById('confirmationMessage');
        confirmationMessage.style.display = 'block';
        confirmationMessage.innerHTML = `<p>Ticket cadastrado com sucesso!</p>`;

        // Oculta a mensagem de confirmação após 3 segundos
        setTimeout(function () {
            confirmationMessage.style.display = 'none';
        }, 3000);
    });
});
