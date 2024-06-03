function aparecer(){
    // Seleciona o elemento com a classe 'mobile-menu'
    let menuMobile = document.querySelector('.mobile-menu');
    
    // Verifica se o elemento possui a classe 'open'
    if(menuMobile.classList.contains('open')){
        // Se possui, remove a classe 'open' para fechar o menu
        menuMobile.classList.remove('open');
        
        // Altera a imagem do ícone para um ícone de menu
        document.querySelector('.icon').src = "menu_white_36dp.svg"
    } else {
        // Se não possui a classe 'open', adiciona a classe 'open' para abrir o menu
        menuMobile.classList.add('open');
        
        // Altera a imagem do ícone para um ícone de fechar
        document.querySelector('.icon').src = "close_white_36dp.svg"
    }
}