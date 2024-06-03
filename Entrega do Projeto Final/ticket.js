document.addEventListener("DOMContentLoaded", function () {
    const loginLink = document.getElementById("loginLink");
    const registerLink = document.getElementById("registerLink");
    const logoutButton = document.getElementById("logoutButton");
    const ticketForm = document.getElementById("ticketForm");
    const loginPrompt = document.getElementById("loginPrompt");

    function checkLoginStatus() {
        const loggedInUser = localStorage.getItem("loggedInUser");
        if (loggedInUser) {
            loginLink.style.display = "none";
            registerLink.style.display = "none";
            logoutButton.style.display = "block";
            ticketForm.style.display = "block";
            loginPrompt.style.display = "none";
        } else {
            loginLink.style.display = "inline";
            registerLink.style.display = "inline";
            logoutButton.style.display = "none";
            ticketForm.style.display = "none";
            loginPrompt.style.display = "block";
        }
    }

    checkLoginStatus();

    logoutButton.addEventListener("click", function () {
        localStorage.removeItem("loggedInUser");
        checkLoginStatus();
        window.location.href = "index.html";
    });

    ticketForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const nome = document.getElementById('nome').value;
        const assunto = document.getElementById('assunto').value;
        const ticket = document.getElementById('ticket').value;

        const data = {
            nome: nome,
            assunto: assunto,
            ticket: ticket
        };
        let tickets = JSON.parse(localStorage.getItem('tickets')) || [];
        tickets.push(data);
        localStorage.setItem('tickets', JSON.stringify(tickets));
        document.getElementById('ticketForm').reset();
        const confirmationMessage = document.getElementById('confirmationMessage');
        confirmationMessage.style.display = 'block';
        confirmationMessage.innerHTML = `<p>Ticket cadastrado com sucesso!</p>`;
        setTimeout(function () {
            confirmationMessage.style.display = 'none';
        }, 3000);
    });
});
