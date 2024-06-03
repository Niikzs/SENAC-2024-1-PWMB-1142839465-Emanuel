function renderizarTickets(tickets) {
    const ticketsList = document.getElementById('ticketsList');
    ticketsList.innerHTML = '';

    tickets.forEach(ticket => {
        const ticketHTML = `
            <div class="ticket">
                <h3>${ticket.nome}</h3>
                <p>Assunto: ${ticket.assunto}</p>
                <p>Ticket: ${ticket.ticket}</p>
            </div>
        `;
        ticketsList.innerHTML += ticketHTML;
    });
}

function filtrarTicketsPorNome(nome) {
    const tickets = JSON.parse(localStorage.getItem('tickets')) || [];
    const ticketsFiltrados = tickets.filter(ticket => ticket.nome.toLowerCase().includes(nome.toLowerCase()));
    renderizarTickets(ticketsFiltrados);
}

document.getElementById('filtroNome').addEventListener('input', function (event) {
    const nome = event.target.value;
    filtrarTicketsPorNome(nome);
});
window.addEventListener('DOMContentLoaded', function () {
    const tickets = JSON.parse(localStorage.getItem('tickets')) || [];
    renderizarTickets(tickets);
});