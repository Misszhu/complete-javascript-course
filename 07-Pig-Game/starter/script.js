'use strict';

const player0El = document.querySelector('.player--0')
const player1El = document.querySelector('.player--1')
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0')
const current1El = document.getElementById('current--1')
const newBtn = document.querySelector('.btn--new')
const rollBtn = document.querySelector('.btn--roll')
const holdBtn = document.querySelector('.btn--hold')
const diceEl = document.querySelector('.dice')

let playerScores, currentScore, activePlayer, playing

const init = function () {
  playerScores = [0, 0]
  currentScore = 0
  activePlayer = 0
  playing = true

  diceEl.classList.add('hidden')

  current0El.textContent = 0;
  current1El.textContent = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
}
init();


function switchPlay() { 
  diceEl.classList.add('hidden')
  currentScore = 0
  document.getElementById(`current--${activePlayer}`).textContent = 0
  player0El.classList.toggle('player--active')
  player1El.classList.toggle('player--active')

  activePlayer = activePlayer === 0 ? 1 : 0
}

rollBtn.addEventListener('click', function() {
  if (!playing) {
    return
  }
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
  if (!playing) {
    return
  }
  playerScores[activePlayer] = currentScore + playerScores[activePlayer]
  document.getElementById(`score--${activePlayer}`).textContent = playerScores[activePlayer] 

  if (playerScores[activePlayer]>=20)  {
    document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
    playing = false
    return 
  } 
  
  switchPlay()
})

newBtn.addEventListener('click', init)

