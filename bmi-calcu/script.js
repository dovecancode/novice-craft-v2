const heightVal = document.getElementById('heightVal')
const rangeInputEl = document.getElementById('range-input')
const progess = document.getElementById('progress')

function onRangeInput(e) {
  console.log(rangeInputEl.value)
  heightVal.textContent = rangeInputEl.value
  progess.style.width = rangeInputEl.value / 3 + '%' // (rangeInputEl.value / 300) * 100 + '%'
}

rangeInputEl.addEventListener('input', onRangeInput)
