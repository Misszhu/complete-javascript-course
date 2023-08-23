'use strict';

const playerEl0 = document.querySelector('.player--0')
const playerEl1 = document.querySelector('.player--1')
const currentScoreEl0 = document.getElementById('current--0')
const currentScoreEl1 = document.getElementById('current--1')
const newBtn = document.querySelector('.btn--new')
const rollBtn = document.querySelector('.btn--roll')
const holdBtn = document.querySelector('.btn--hold')
const diceEl = document.querySelector('.dice')
let playerScores = [0, 0]

let currentScore = 0
let activePlayer = 0

diceEl.classList.add('hidden')

function switchPlay() { 
  diceEl.classList.add('hidden')
  currentScore = 0
  document.getElementById(`current--${activePlayer}`).textContent = 0
  playerEl0.classList.toggle('player--active')
  playerEl1.classList.toggle('player--active')

  activePlayer = activePlayer === 0 ? 1 : 0
}

rollBtn.addEventListener('click', function() {
  diceEl.classList.remove('hidden')
  const score = Math.trunc(Math.random() * 6) + 1
  currentScore += score
  document.getElementById(`current--${activePlayer}`).textContent = currentScore
  diceEl.src = `dice-${score}.png`

  if (score === 1) {
    switchPlay()
  }
})

holdBtn.addEventListener('click', function() {
  playerScores[activePlayer] = currentScore + playerScores[activePlayer]
  document.getElementById(`score--${activePlayer}`).textContent = playerScores[activePlayer] 

  if (playerScores[activePlayer]>=20)  {
    document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
    return 
  }
  
  switchPlay()
})

newBtn.addEventListener('click', function() {
  document.getElementById(`current--${activePlayer}`).textContent = 0
  document.getElementById(`player--${activePlayer}`).classList.remove('player--winner')
  playerScores = [0, 0]
  currentScore = 0
  activePlayer = 0
  currentScoreEl0.textContent = 0
  currentScoreEl1.textContent = 0
})

