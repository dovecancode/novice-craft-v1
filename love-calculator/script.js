const pressBtnEl = document.getElementById('pressBtn') //button
const resultEl = document.querySelector('.result p')
let guyName = document.getElementById('guyName')
let girlName = document.getElementById('girlName')

function onClickCalculate() {
  let love_score = Math.floor(Math.random() * 100) + 1
  resultEl.innerHTML = ''
  if (guyName.value !== '' && girlName.value !== '') {
    if (love_score > 80) {
      resultEl.innerHTML = 'Your love score is ' + love_score + '%.' + ' You are a good match!.'
    } else if (love_score > 40 && love_score <= 80) {
      resultEl.innerHTML = 'Your love score is ' + love_score + '%' + 'You are both sweet but    this is not the right time.'
    } else if (love_score <= 30) {
      resultEl.innerHTML = 'Your love score is ' + love_score + '%' + ' You both have other priorities.'
    } else {
      resultEl.innerHTML = 'Your love score is ' + love_score + '% ' + ' I think you  are good to be friends not lovers.'
    }
  } else {
    alert('Dont leave input fields empty')
  }

  guyName.value = ''
  girlName.value = ''
}

pressBtnEl.addEventListener('click', onClickCalculate)
