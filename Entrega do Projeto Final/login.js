document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    const loginError = document.getElementById("loginError");
    const loginLink = document.getElementById("loginLink");
    const registerLink = document.getElementById("registerLink");
    const logoutButton = document.getElementById("logoutButton");

    function checkLoginStatus() {
        const loggedInUser = localStorage.getItem("loggedInUser");
        if (loggedInUser) {
            loginLink.style.display = "none";
            registerLink.style.display = "none";
            logoutButton.style.display = "block";
        } else {
            loginLink.style.display = "inline";
            registerLink.style.display = "inline";
            logoutButton.style.display = "none";
        }
    }

    checkLoginStatus();

    logoutButton.addEventListener("click", function() {
        localStorage.removeItem("loggedInUser");
        checkLoginStatus();
        window.location.href = "index.html";
    });

    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault();

            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            const users = JSON.parse(localStorage.getItem("users")) || [];
            const user = users.find(user => user.username === username && user.password === password);

            if (!user) {
                loginError.textContent = "Nome ou senha invalidos.";
                loginError.style.display = "block";
            } else {
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