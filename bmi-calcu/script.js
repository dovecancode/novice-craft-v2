const heightVal = document.getElementById('heightVal')
const rangeInputEl = document.getElementById('range-input')

function onRangeInput(e) {
  // console.log(rangeInputEl.value)

  heightVal.textContent = rangeInputEl.value

  let rangeMove = rangeInputEl.value / 3.3 + '%'

  if (rangeInputEl.value <= 0) {
    heightVal.style.left = '-0.9rem'
  } else if (rangeInputEl.value / 3 + '%' === '100%') {
    heightVal.style.left = '91%'
  } else {
    heightVal.style.left = rangeMove
  }
}

rangeInputEl.addEventListener('input', onRangeInput)
