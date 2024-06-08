document.addEventListener("DOMContentLoaded", function () {
    const loginCliente = JSON.parse(localStorage.getItem("LoginCliente"));
    const produtos = JSON.parse(localStorage.getItem("Produtos"));
    const vitrine = document.getElementById("vitrine");
    const profileContainer = document.getElementById("profile-container");

    if (loginCliente) {
        profileContainer.innerHTML = `
            <img class="foto-perfil" src="${loginCliente.urlAvatarCliente}" alt="${loginCliente.nomeCliente}">
            <p>${loginCliente.nomeCliente}</p>
        `;
    }

    if (!produtos || produtos.length === 0) {
        vitrine.innerHTML = "<p>Nenhum produto disponível.</p>";
        return;
    }

    let vitrineContent =
        "<table><tr><th>Nome</th><th>Descrição</th><th>Preço</th><th>Estoque</th><th>Imagem</th><th>Quantidade</th></tr>";
    produtos.forEach((produto) => {
        vitrineContent += `<tr>
            <td>${produto.nomeProduto}</td>
            <td>${produto.descricaoProduto}</td>
            <td>R$ ${produto.valorUnitarioProduto.toFixed(2)}</td>
            <td>${produto.qtdEstoqueProduto}</td>
            <td><img src="${produto.urlImgProduto}" alt="${produto.nomeProduto}"></td>
            <td><input type="number" id="quantidade-${produto.idProduto}" min="1" max="${produto.qtdEstoqueProduto}" value="1"></td>
        </tr>`;
    });
    vitrineContent += "</table>";

    vitrineContent += `
        <button id="adicionarCarrinho" class="btn-adicionar">Adicionar ao Carrinho</button>
        <button id="verCarrinho" class="btn-ver-carrinho">Ver Carrinho</button>
    `;

    vitrine.innerHTML = vitrineContent;

    document.getElementById("adicionarCarrinho").addEventListener("click", function () {
        const carrinho = JSON.parse(localStorage.getItem("CarrinhoCompras")) || [];
        let carrinhoVazio = true;
        produtos.forEach((produto) => {
            const quantidade = parseInt(document.getElementById(`quantidade-${produto.idProduto}`).value);
            if (quantidade && quantidade > 0) {
                carrinho.push({ ...produto, quantidade });
                carrinhoVazio = false;
            }
        });
        localStorage.setItem("CarrinhoCompras", JSON.stringify(carrinho));
        if (carrinhoVazio) {
            alert("Carrinho vazio. Por favor, adicione um item.");
        } else {
            alert("Produto(s) adicionado(s) ao carrinho com sucesso.");
        }
    });

    document.getElementById("verCarrinho").addEventListener("click", function () {
        window.location.href = "carrinho.html";
    });
});
