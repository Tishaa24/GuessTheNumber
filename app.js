const randomnumber=parseInt(Math.random()*100+1);

const submit=document.querySelector('#subt');
const userInput=document.querySelector('#guessField')
const guessslot=document.querySelector('.guesses')
const remaining=document.querySelector('.lastResult')
const loworhi=document.querySelector('.lowOrHi')
const startover=document.querySelector('.resultParas')


const p=document.createElement('p');

let prevguess=[]
let numbguess=1;
let playgame=true;
if(playgame){
  submit.addEventListener('click',function(e){
    e.preventDefault();
    const guess=parseInt(userInput.value)
  validateGuess(guess)
  })
  }
function validateGuess(guess){
if( isNaN(guess)){
  alert(`please enter valid number`)
}
else if(guess<1){
  alert('please enter a number greater than 1')
}
else if(guess>100){
  alert('please enter a number less than 100')
}
else{
  prevguess.push(guess)
  if(numbguess==11){
    displayGuess(guess)
    displayMessage(`game over.Number is ${randomnumber}`)
    endGame()
  }
  else{
    displayGuess(guess)
    checkGuess(guess)

  }
}

}
function checkGuess(guess){
  if(guess===randomnumber){
    displayMessage("hurray you win")
    endGame()
  }
  else if(guess<randomnumber){
    displayMessage("your number is lower than exact number")
  }
  else if(guess>randomnumber){
    displayMessage("your number is higher than exact number")
  }


}
function displayGuess(guess){
  userInput.value='';
  guessslot.innerHTML +=`${guess} , `;
  numbguess++;
  remaining.innerHTML=`${11-numbguess}`; 

}
function displayMessage(message){
  loworhi.innerHTML=`<h2>${message}</h2>`

}
function endGame(){
userInput.value=''
userInput.setAttribute('disabled','')
p.classList.add('button')
p.innerHTML=`<h3 id="newgame">NEW GAME</h3>`
startover.appendChild(p)
playgame=false;
newGame()
}
function newGame(){
const newgamebutton=document.querySelector('#newgame')
newgamebutton.addEventListener('click',function(e){
  const randomnumber=parseInt(Math.random()*100+1);
  
  numbguess=1;
  prevguess=[]
  remaining.innerHTML=`${11-numbguess}`; 
  guessslot.innerHTML=''
  userInput.removeAttribute('disabled')
  startover.removeChild(p)
  loworhi.innerHTML=''
  playgame=true

});

}