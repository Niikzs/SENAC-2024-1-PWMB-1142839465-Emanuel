// Ouve o evento de carregamento do DOM para executar o código quando a página estiver completamente carregada
document.addEventListener("DOMContentLoaded", function() {
    // Obtém referências aos elementos relevantes do DOM
    const loginForm = document.getElementById("loginForm");
    const loginError = document.getElementById("loginError");
    const loginLink = document.getElementById("loginLink");
    const registerLink = document.getElementById("registerLink");
    const logoutButton = document.getElementById("logoutButton");

    // Função para verificar o status do login e atualizar a exibição dos elementos de acordo
    function checkLoginStatus() {
        // Obtém o usuário logado do armazenamento local
        const loggedInUser = localStorage.getItem("loggedInUser");
        // Se um usuário estiver logado, esconde os links de login e registro e mostra o botão de logout
        if (loggedInUser) {
            loginLink.style.display = "none";
            registerLink.style.display = "none";
            logoutButton.style.display = "block";
        } else { // Caso contrário, mostra os links de login e registro e esconde o botão de logout
            loginLink.style.display = "inline";
            registerLink.style.display = "inline";
            logoutButton.style.display = "none";
        }
    }

    // Chama a função para verificar o status do login e atualizar a exibição dos elementos assim que a página for carregada
    checkLoginStatus();

    // Adiciona um ouvinte de evento para o clique no botão de logout
    logoutButton.addEventListener("click", function() {
        // Remove o usuário logado do armazenamento local
        localStorage.removeItem("loggedInUser");
        // Verifica novamente o status do login e atualiza a exibição dos elementos
        checkLoginStatus();
        // Redireciona o usuário para a página inicial após o logout
        window.location.href = "index.html";
    });

    // Verifica se o formulário de login existe na página antes de adicionar o ouvinte de evento
    if (loginForm) {
        // Adiciona um ouvinte de evento para o envio do formulário de login
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Impede o envio padrão do formulário

            // Obtém os valores do nome de usuário e senha do formulário de login
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            // Obtém os usuários armazenados no armazenamento local ou uma lista vazia se não houver nenhum
            const users = JSON.parse(localStorage.getItem("users")) || [];
            // Procura um usuário com o nome de usuário e senha correspondentes
            const user = users.find(user => user.username === username && user.password === password);

            // Se não encontrar um usuário correspondente, exibe uma mensagem de erro
            if (!user) {
                loginError.textContent = "Nome ou senha inválidos.";
                loginError.style.display = "block";
            } else { // Caso contrário, define o usuário como logado no armazenamento local, exibe uma mensagem de sucesso e redireciona para a página inicial após 2 segundos
                localStorage.setItem("loggedInUser", JSON.stringify(user));
                loginError.textContent = "Logado com sucesso.";
                loginError.style.color = "green";
                loginError.style.display = "block";
                setTimeout(() => {
                    window.location.href = "index.html";
                }, 2000);
            }
        });
    }
});
