// Função para renderizar os tickets na página
function renderizarTickets(tickets) {
    // Obtém a referência à lista de tickets no HTML
    const listaTickets = document.getElementById('ticketsList');
    // Limpa o conteúdo atual da lista
    listaTickets.innerHTML = '';

    // Itera sobre cada ticket e gera o HTML correspondente para exibição na lista
    tickets.forEach(ticket => {
        const ticketHTML = `
            <div class="ticket">
                <h3>${ticket.nome}</h3>
                <p>Assunto: ${ticket.assunto}</p>
                <p>Ticket: ${ticket.ticket}</p>
            </div>
        `;
        // Adiciona o HTML do ticket à lista de tickets
        listaTickets.innerHTML += ticketHTML;
    });
}

// Função para filtrar os tickets pelo nome do usuário
function filtrarTicketsPorNome(nome) {
    // Obtém todos os tickets armazenados no localStorage ou uma lista vazia se não houver nenhum
    const tickets = JSON.parse(localStorage.getItem('tickets')) || [];
    // Filtra os tickets cujo nome corresponde ao termo de busca (ignorando maiúsculas e minúsculas)
    const ticketsFiltrados = tickets.filter(ticket => ticket.nome.toLowerCase().includes(nome.toLowerCase()));
    // Renderiza os tickets filtrados na página
    renderizarTickets(ticketsFiltrados);
}

// Adiciona um ouvinte de evento para o input de filtro por nome
document.getElementById('filtroNome').addEventListener('input', function (event) {
    // Obtém o valor inserido no input de filtro
    const nome = event.target.value;
    // Filtra os tickets com base no nome inserido e renderiza na página
    filtrarTicketsPorNome(nome);
});

// Ouve o evento de carregamento do DOM para renderizar todos os tickets na página assim que a página for carregada
window.addEventListener('DOMContentLoaded', function () {
    // Obtém todos os tickets armazenados no localStorage ou uma lista vazia se não houver nenhum
    const tickets = JSON.parse(localStorage.getItem('tickets')) || [];
    // Renderiza todos os tickets na página
    renderizarTickets(tickets);
});
