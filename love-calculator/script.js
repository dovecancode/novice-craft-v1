const pressBtnEl = document.getElementById('pressBtn') //button
const resultEl = document.getElementById('result')
let guyName = document.getElementById('guyName')
let girlName = document.getElementById('girlName')

let love_score = Math.floor(Math.random() * 100) + 1

function onClickCalculate() {
  if (guyName.value.length > 0 && girlName.value.length > 0) {
    if (love_score > 80) {
      resultEl.innerHTML = '<p>Your love score is ' + love_score + '%.' + ' You are a good match!</p>'
    } else if (love_score > 40 && love_score <= 80) {
      resultEl.innerHTML = '<p>Your love score is ' + love_score + '%' + 'You are both sweet but    this is not the right time</p>'
    } else if (love_score <= 30) {
      resultEl.innerHTML = '<p>Your love score is ' + love_score + '%' + ' You both have other priorities</p>'
    } else {
      resultEl.innerHTML = '<p>Your love score is ' + love_score + '% ' + ' I think you  are good to be friends not lovers.</p>'
    }
  } else {
    alert('Dont leave input fields empty')
  }

  guyName.value = ''
  girlName.value = ''
  // console.log(guyName)
}

pressBtnEl.addEventListener('click', onClickCalculate)
