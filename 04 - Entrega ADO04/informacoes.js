const clientes = [
    {
      emailCliente: "emanuel@example.com",
      senhaCliente: "123",
      nomeCliente: "Emanuel",
      urlAvatarCliente: "assets/avatar.png",
      nomeArquivoAvatarCliente: "avatar.png",
    },
  ];
  
  const produtos = [
    {
      idProduto: 1,
      nomeProduto: "Headset Baseus GH02",
      descricaoProduto: "Baseus-Wireless Gaming Headphone com microfone, Bluetooth 5.3, driver de 40mm, 2.4G, sem fio, cabo RGB, GH02",
      valorUnitarioProduto: 270.00,
      qtdEstoqueProduto:100,
      urlImgProduto: "assets/Baseus.png",
      nomeArquivoImgProduto: "Baseus.png",
    },
    {
      idProduto: 2,
      nomeProduto: "Headset Gamer Havit",
      descricaoProduto: "Headset Gamer Havit H2002D, Drivers 53mm, P3, XBOX ONE e PS4, Branco e Roxo - HV-H2002WP",
      valorUnitarioProduto: 189.99,
      qtdEstoqueProduto: 500,
      urlImgProduto: "assets/Havit.png",
      nomeArquivoImgProduto: "Havit.png",
    },
    {
      idProduto: 3,
      nomeProduto: "Fone de ouvido KZ-EDX PRO",
      descricaoProduto: "KZ-EDX Pro In Ear Fones De Ouvido Dinâmicos, Cancelamento De Ruído Esporte Headset, HiFi Music Earbuds, DQ6, ZS10PRO, MT1",
      valorUnitarioProduto: 30.00,
      qtdEstoqueProduto: 1000,
      urlImgProduto: "assets/KZ.png",
      nomeArquivoImgProduto: "KZ.png",
    },
  ];
  
  localStorage.setItem("Clientes", JSON.stringify(clientes));
  localStorage.setItem("Produtos", JSON.stringify(produtos));