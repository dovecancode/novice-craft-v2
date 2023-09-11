// BMI = (weight) / (height * height)
// height in cms

const heightValEl = document.getElementById('heightVal')
const rangeHeightVal = document.getElementById('height')
const weight = document.getElementById('weight')
const age = document.getElementById('age')
const genderSelect = [...document.querySelectorAll('.gender-select')]
const btnCalculate = document.getElementById('btnCalculate')
const bmiResult = document.querySelector('.bmi-result p')

let height
let gender

// UI var
const progess = document.getElementById('progress')

const onRangeInput = () => {
  height = +rangeHeightVal.value
  heightValEl.textContent = rangeHeightVal.value
  progess.style.width = rangeHeightVal.value / 3 + '%' // (rangeInputEl.value / 300) * 100 + '%'
}

const onClickCalculate = () => {
  let bmi
  let weightVal = +weight.value

  if (gender === undefined && weight.value === '' && height === undefined && age.value === '') {
    alert('Please choose gender, define a height, weight and age')
  } else {
    if (gender === undefined) {
      alert('Please select Gender')
    } else if (height === undefined) {
      alert('Please define a Height')
    } else if (weight.value === '') {
      alert('Please define a Weight')
    } else if (age.value === '') {
      alert('Please define the Age')
    } else {
      bmi = (weightVal / ((height * height) / 10000)).toFixed(2)
      bmiResult.textContent = renderResult(bmi, gender)
    }
  }
}

const renderResult = (bmi, gender) => {
  let result

  if (gender === 'female') {
    gender = "ma'am"
  } else {
    gender = 'sir'
  }

  if (bmi >= 25) {
    result = `You are overweight ${gender}, you're BMI is ${bmi}, you better do some griding!!!`
  } else if (bmi >= 18) {
    result = `You're BMI is ${bmi}, you are in good shape ${gender}, keep it up!`
  } else {
    result = `You are underweight ${gender}, you're BMI is ${bmi}, you better eat more!!!`
  }

  return result
}

genderSelect.forEach(function (choice) {
  choice.addEventListener('click', function () {
    if (choice.checked) {
      gender = choice.id
    }
  })
})

rangeHeightVal.addEventListener('input', onRangeInput)

btnCalculate.addEventListener('click', onClickCalculate)
