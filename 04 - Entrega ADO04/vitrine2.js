document.addEventListener("DOMContentLoaded", function () {
    const produtos = JSON.parse(localStorage.getItem("Produtos"));
    const vitrine = document.getElementById("vitrine");

    if (!produtos || produtos.length === 0) {
        vitrine.innerHTML = "<p>Nenhum produto disponível.</p>";
        return;
    }

    produtos.forEach((produto) => {
        const produtoDiv = document.createElement('div');
        produtoDiv.classList.add('produto');
        produtoDiv.innerHTML = `
            <h3>${produto.nomeProduto}</h3>
            <p>${produto.descricaoProduto}</p>
            <p>Preço: R$ ${produto.valorUnitarioProduto.toFixed(2)}</p>
            <p>Estoque: ${produto.qtdEstoqueProduto}</p>
            <img src="${produto.urlImgProduto}" alt="${produto.nomeProduto}" width="100">
           
        `;
        vitrine.appendChild(produtoDiv);
    });
});