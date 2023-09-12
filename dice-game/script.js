// img element
const p1ImgEl = document.querySelector('.p1 img')
const p2ImgEl = document.querySelector('.p2 img')

// score element
const p1ScoreEl = document.querySelector('.p1 .score')
const p2ScoreEl = document.querySelector('.p2 .score')

const headEl = document.querySelector('h1')

let p1Score = 0
let p2Score = 0

let maxScore = 10

// button element
const diceBtn = document.getElementById('diceBtn')
const resetBtn = document.getElementById('reset')

function onClickRoll() {
  let player1 = Math.floor(Math.random() * 6) + 1
  let player2 = Math.floor(Math.random() * 6) + 1

  p1ImgEl.setAttribute('src', 'img/dice-' + player1 + '.png')
  p2ImgEl.setAttribute('src', 'img/dice-' + player2 + '.png')

  if (player1 === player2) {
    headEl.textContent = 'Draw this time'
    p2ScoreEl.textContent = p2Score
    p1ScoreEl.textContent = p1Score
  } else if (player1 > player2) {
    headEl.textContent = 'Player 1 Wins'
    p1Score += 1
    p1ScoreEl.textContent = p1Score + ' 🤘'
    // remove the winner flag from player 2
    p2ScoreEl.textContent = p2Score
    if (p1Score === maxScore) {
      headEl.textContent = 'Game over player 1 Wins 🤘'
      diceBtn.disabled = true
      reset.disabled = false
    }
  } else if (player2 > player1) {
    headEl.textContent = 'Player 2 Wins'
    p2Score += 1
    p2ScoreEl.textContent = p2Score + ' 🤘'
    // remove the winner flag from player 2
    p1ScoreEl.textContent = p1Score
    if (p2Score === maxScore) {
      headEl.textContent = 'Game over player 2 Wins 🤘'
      diceBtn.disabled = true
      reset.disabled = false
    }
  }
}

function onClickResetGame() {
  headEl.textContent = 'Lets play another round'
  p1Score = 0
  p2Score = 0
  reset.disabled = true
  diceBtn.disabled = false
  p1ScoreEl.textContent = p1Score
  p2ScoreEl.textContent = p2Score
}

diceBtn.onclick = onClickRoll
resetBtn.onclick = onClickResetGame
