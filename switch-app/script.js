const btnEl = document.querySelectorAll('.btn')
const box = document.getElementById('box')

function onClickButton(event) {
  let easingFunction = event.target.id

  switch (easingFunction) {
    case 'ease':
      box.classList.add('move')
      box.style.transitionTimingFunction = easingFunction
      box.style.transitionDuration = '4s'
      box.textContent = easingFunction
      timeOut()
      break
    case 'ease-in':
      box.classList.add('move')
      box.style.transitionTimingFunction = easingFunction
      box.style.transitionDuration = '4s'
      box.textContent = easingFunction
      setTimeout(() => {
        removeTimingFunction()
      }, 4000)
      break
    case 'ease-out':
      box.classList.add('move')
      box.style.transitionTimingFunction = easingFunction
      box.style.transitionDuration = '4s'
      box.textContent = easingFunction
      timeOut()
      break
    case 'ease-in-out':
      box.classList.add('move')
      box.style.transitionTimingFunction = easingFunction
      box.style.transitionDuration = '4s'
      box.textContent = easingFunction
      timeOut()
      break
    case 'cubic1':
      box.classList.add('move')
      box.style.transitionTimingFunction = 'cubic-bezier(.08,.9,1,1)'
      box.style.transitionDuration = '4s'
      box.textContent = easingFunction
      timeOut()
      break
    default:
      box.classList.add('move')
      box.style.transitionTimingFunction = easingFunction
      box.style.transitionDuration = '4s'
      box.textContent = easingFunction
      timeOut()
      break
  }
}

for (let i = 0; i < btnEl.length; i++) {
  const btn = btnEl[i]
  btn.addEventListener('click', function (e) {
    onClickButton(e)
  })
}

function removeTimingFunction() {
  box.classList.remove('move')
  box.style.transitionTimingFunction = 'unset'
  box.style.transitionDuration = 'unset'
  box.textContent = 'box'
}

function timeOut() {
  setTimeout(() => {
    removeTimingFunction()
  }, 4500)
}
