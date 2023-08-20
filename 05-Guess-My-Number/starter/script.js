'use strict';

/*
querySelector 
1. 获取check btn
2. 获取 input 框的值
3. 定义 secret number
4. 当 secret number 大于 input value 时
5. 当 secret number 小于 input value 时
6. 猜中 secret number 时，manipulate css
7. 输掉比赛时
8. 重置比赛
9. 定义分数
*/

const checkBtn = document.querySelector('.check')
const guessEle = document.querySelector('.guess')
const scoreEle = document.querySelector('.score')
const againBtn = document.querySelector('.again')
const number = document.querySelector('.number')
const highScoreEle = document.querySelector('.highscore')
let secret = Math.trunc(Math.random() * 10 * 2 + 1)
let score = 20
let highScore = 0

function displayMessage(message) {
  document.querySelector('.message').textContent = message
}

checkBtn.addEventListener('click', function () {
  const guess = Number(guessEle.value)

  if (!guess) {
    displayMessage('🤡 Please type a number')
  } else if (guess !== secret) {
    if (score > 1) {
      displayMessage(guess > secret ? '🤪 Too hight!' : '🤪 Too Low!')
      score--
      scoreEle.textContent = score
    } else {
      scoreEle.textContent = 0
      displayMessage('💥 You lose the game')
    }
  } else if (guess === secret) {
    displayMessage('🥳 Correct number!')
    number.style.width = '30rem'
    document.body.style.backgroundColor = '#60b347'
    number.textContent = secret
    if (highScore < score) {
      highScore = score
      highScoreEle.textContent = highScore
    }
  }
})

againBtn.addEventListener('click', function () {
  score = 20
  secret = Math.trunc(Math.random() * 10 + 1)
  number.style.width = '25rem'
  document.body.style.backgroundColor = '#222'
  displayMessage('Start guessing...')
  guessEle.value = ''
  number.textContent = '?'
  scoreEle.textContent = score
})

