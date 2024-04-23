let numeros = []
const btnIncluir = document.getElementById('incluir')
const btnFinalizar = document.getElementById('finalizar')
const txtArea = document.getElementById('txtArea')
btnIncluir.addEventListener('click', () => {
  const numeroInput = document.getElementById('numero')
  const numero = parseInt(numeroInput.value)

  if (isNaN(numero) || numero < 1 || numero > 100 || numeros.includes(numero)) {
    alert(
      'Número informado inválido (Deve ser entre 1 e 100 e não pode ser repetido)',
    )
    return
  }

  numeros.push(numero)
  const option = document.createElement('option')
  option.text = `Valor ${numero} adicionado`

  txtArea.value += "\n " + option.text
})

btnFinalizar.addEventListener('click', () => {
  if (numeros.length === 0) {
    alert('Adicione valores antes de finalizar')
    return
  }

  const maiorValor = Math.max(...numeros)
  const menorValor = Math.min(...numeros)
  const somaValores = numeros.reduce((acc, curr) => acc + curr, 0)
  const mediaValores = somaValores / numeros.length

  const resultado = document.getElementById('resultado')
  resultado.innerHTML = `
    <p>Ao todo, temos ${numeros.length} elementos cadastrados</p>
    <p>O maior valor informado foi ${maiorValor}</p>
    <p>O menor valor informado foi ${menorValor}</p>
    <p>A soma dos valores é ${somaValores}</p>
    <p>A média dos valores informados é ${mediaValores.toFixed(2)}</p>
  `
})