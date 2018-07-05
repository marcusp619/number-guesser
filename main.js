var randomNumGenerator = Math.floor(Math.random() * 100) + 1; 
console.log(randomNumGenerator);
var userGuessSubmit = document.querySelector('#user-guess-submit');
var userInputField = document.querySelector('#user-input-field');
var feedbackMsg = document.querySelector('.feedback-msg');
var resetBtn = document.querySelector('.resetBtn');
var allBtns = document.querySelectorAll('.btn');
var clearBtn = document.querySelector('#clear-user-guess');

function checkTheGuess() { 
  var theUsersGuess = parseInt(userInputField.value);
  if ( isANumber(theUsersGuess) ) {
    console.log(theUsersGuess);
    if ( theUsersGuess === randomNumGenerator ) {
    setGameFinished();
  } else if ( theUsersGuess > randomNumGenerator ) {
    setMessages('That is too high');
  } else if ( theUsersGuess < randomNumGenerator ) {
    setMessages('That is too low');
    }
  }  
}

function isANumber(theUsersGuess) {
  var yourGuessResult = document.querySelector('.your-guess-result');
  if ( typeof theUsersGuess === 'number' ) {
    if ( theUsersGuess >= 1 && theUsersGuess <= 100 ) {
      document.querySelector('.result-msg').innerText = 'Your last guess was ';
      yourGuessResult.innerText = theUsersGuess;  
    } else {
      alert('Your guess was not between 1 and 100');
      disableBtns();
      clearFocusInput();
    } 
  }
  return yourGuessResult;
}

function clearFocusInput() {
  userInputField.value = '';
  userInputField.focus();
}

function setMessages(message) {
  feedbackMsg.innerText = message;
  clearFocusInput();
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
    resetBtn.disabled = true;
    clearBtn.disabled = true;
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
  var resetElements = document.querySelectorAll('.elements h4, .elements h1');
  for (var i = 0; i < resetElements.length; i++) {
    resetElements[i].innerText = '';
  }
  clearFocusInput();
  randomNumGenerator = Math.floor(Math.random() * 100) + 1; 
  disableBtns();
}

userInputField.addEventListener('keyup', function(event) {
  if ( userInputField.value !== '' ) {
    activateBtns();
  } else {
    disableBtns();
  }
});

clearBtn.addEventListener('click', function() {
  clearFocusInput();  
  disableBtns();
});

userGuessSubmit.addEventListener('click', function() {
  event.preventDefault();
  checkTheGuess();
  disableBtns();
  resetBtn.disabled = false;
  resetBtn.classList.remove('btn-disabled');
  resetBtn.classList.add('btn-active'); 
});