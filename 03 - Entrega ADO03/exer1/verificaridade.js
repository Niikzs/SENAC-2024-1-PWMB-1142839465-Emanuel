function verificaridade() {
    var anoNasc = document.querySelector('#anoNasc');
    var data = new Date();
    var ano = data.getFullYear();
    var resultado = document.querySelector('div#resultado');
    var imagensCentralizadas = document.getElementById('resultado')
    if (anoNasc.value.length == 0 || anoNasc.value > ano || anoNasc.value < 1900) {
        alert('Verifique as informações e tente novamente');
    } else {
        var sexualidade = document.getElementsByName('sexo');
        var idade = ano - parseInt(anoNasc.value);
        var genero = '';
        var imagem = document.createElement('img');
        if (sexualidade[0].checked) {
            genero = 'Masculino';
            if(idade>=0 && idade<10){
                imagem.setAttribute('src','imagens/crianca-masc.png')
            }
            else if(idade<21){
                imagem.setAttribute('src','imagens/jovem-masc.png')
            }
            else if(idade<60){
                imagem.setAttribute('src','imagens/adulto-masc.png')
            }
            else{
                imagem.setAttribute('src','imagens/idoso-masc.png')
            }
        } else {
            genero = 'Feminino';
            if(idade>=0 && idade<10){
                imagem.setAttribute('src','imagens/crianca-fem.png')
            }
            else if(idade<21){
                imagem.setAttribute('src','imagens/jovem-fem.png')
            }
            else if(idade<60){
                imagem.setAttribute('src','imagens/adulto-fem.png')
            }
            else{
                imagem.setAttribute('src','imagens/idoso-fem.png')
            }
            
        }
        resultado.style.textAlign = 'center'
        resultado.innerHTML = `o genero : ${genero} com idade de ${idade} anos.`;
        resultado.appendChild(imagem);       
        
        imagem.style.height="500px"
        imagensCentralizadas.style.height="600px"
    }
}