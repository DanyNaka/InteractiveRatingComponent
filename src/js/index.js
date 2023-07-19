const ratingNumbers = document.querySelectorAll('.selecao')
let numeroSelecionado = ''

ratingNumbers.forEach(rating => {
  rating.addEventListener('click', () => {
    removeSelecaoNumero()

    rating.classList.add('selecionado')
    numeroSelecionado = rating.attributes.id.value.toString()
  })
})

function removeSelecaoNumero() {
  const ratingNumber = document.querySelector('.selecionado')
  ratingNumber.classList.remove('selecionado')
}

function thank() {
  document.getElementById('thank-box').style.display = 'flex'

  document.getElementById(
    'rating-text'
  ).innerText = `You selected ${numeroSelecionado} out of 5`
}
