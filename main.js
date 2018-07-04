// Need to reset text after game finished
var randomNumGenerator = Math.floor(Math.random() * 100) + 1; 
var yourGuessResult = document.querySelector('.your-guess-result');
var resultMsg = document.querySelector('.result-msg');
var userGuessSubmit = document.querySelector('#user-guess-submit');
var userInputField = document.querySelector('#user-input-field');
var feedbackMsg = document.querySelector('.feedback-msg');
var resetBtn = document.querySelector('.resetBtn');
var allBtns = document.querySelectorAll('.btn');

function checkTheGuess() { 
  var theUsersGuess = parseInt(userInputField.value);
  isANum(theUsersGuess); 
  if (theUsersGuess === randomNumGenerator) {
    setGameFinished();
  } else if (theUsersGuess > randomNumGenerator) {
    setMessages('That is too high');
  } else {
    setMessages('That is too low');
  }   
}

function isANum(theUsersGuess) {
  if (typeof theUsersGuess === 'number' ) {
    if (theUsersGuess >= 1 && theUsersGuess <= 100) {
      document.querySelector('.result-msg').innerText = 'Your last guess was ';
      yourGuessResult.innerText = theUsersGuess;  
    } else {
      alert('Your guess was not between 1 and 100');
      disableBtns();
    }
  }
}

function setMessages(message) {
    feedbackMsg.innerText = message;
    userInputField.value = '';
    userInputField.focus();
}

function activateBtns() {
   for(var i = 0; i < allBtns.length; i++){
    allBtns[i].classList.remove('btn-disabled');
    allBtns[i].classList.add('btn-active'); 
    allBtns[i].disabled = false;
  }  
}

function disableBtns() {
   for(var i = 0; i < allBtns.length; i++){
    allBtns[i].classList.add('btn-disabled');
    allBtns[i].classList.remove('btn-active'); 
    userGuessSubmit.disabled = true;
  }  
}

function setGameFinished() {
  feedbackMsg.innerText = "BOOM!";
  userGuessSubmit.classList.remove('btn-active');
  userGuessSubmit.classList.add('btn-disabled');
  userGuessSubmit.disabled = true;
  resetBtn.classList.add('btn-active'); 
}

function resetGame() {
  userInputField.value = '';
  userInputField.focus();  
  randomNumGenerator = Math.floor(Math.random() * 100) + 1; 
}

userInputField.addEventListener('keypress', function() {
 activateBtns();
});

userGuessSubmit.addEventListener('click', function() {
  event.preventDefault();
  checkTheGuess();
});

