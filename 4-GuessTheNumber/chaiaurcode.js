const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
let randomNumber = parseInt(Math.random()*100+1)
const p = document.createElement('p')
const startOver = document.querySelector('.resultParas')

let preGuess = []
let numGuess = 1
let playGame = true

if(playGame){
  submit.addEventListener('click',function(e){
    e.preventDefault()
    const guess = parseInt(userInput.value)
    console.log(guess)
    validateGuess(guess)
  })
}


function validateGuess(guess){
  if(guess<0 || guess==='' || isNaN(guess)){
    alert('Please, Enter a valid number.')
  }else if(guess>100){
    alert('Please, enter number less than 100.')
  }else{
    preGuess.push(guess)
    if(numGuess>10){
      displayGuess(guess)
      displayMsg(`Game over. Random number was ${randomNumber}`)
      endGame()
    }else{
      displayGuess(guess)
      checkGuess(guess)
    }
  }
}

function checkGuess(guess){
  if(guess===randomNumber){
    displayMsg(`Congrats you won!`)
    endGame()
  }else if(guess<randomNumber){
    displayMsg(`Number is too low.`)
  }else{
    displayMsg(`Number is too big.`)
  }
}
function displayGuess(guess){
  userInput.value = ''
  numGuess++
  guessSlot.innerHTML+= `${guess} `
  remaining.innerHTML = `${11-numGuess}`

}
function displayMsg(msg){
  lowOrHi.innerHTML = `<h2>${msg}</h2>`;

}
function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  startGame();
}
function startGame(){
  const newGameButton = document.querySelector('#newGame')

    newGameButton.addEventListener('click',function(e){
    randomNumber = parseInt(Math.random()*100+1)
    guessSlot.innerHTML = ''
    userInput.removeAttribute('disabled','')
    remaining.innerHTML = `${11-numGuess}`
    numGuess = 1
    preGuess = []
    playGame = true
  })
}