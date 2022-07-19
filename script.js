// Variable that stores the list of guesses
let guesses = [];

// variable that stores the correct random number
let correctNumber = getRandomNumber();
 
// manipulate the DOM to add JS functionality to HTML Button elements
window.onload = function() {
    document.getElementById("number-submit").addEventListener("click", playGame);
    document.getElementById("restart-game").addEventListener("click", resetGame);
}

// Store main JS logic into playGame function and call subsequent functions
function playGame(){

let numberGuess = document.getElementById('number-guess').value;
displayResult(numberGuess);
saveGuessHistory(numberGuess);
displayHistory();
}

// Show the result if the guess is too high, too low, or correct
function displayResult(numberGuess){
  if (numberGuess < correctNumber) {
    showNumberBelow();
  } else if (numberGuess > correctNumber) {
    showNumberAbove();
  } else {
    showYouWon();
  }
}

// Reset the game
function resetGame(){
  correctNumber = getRandomNumber();
  document.getElementById("result").innerHTML = "";
  guesses = [];
  displayHistory();
}

// Reset HTML content for Guess History
function resetResultContent(){
  document.getElementById("result").innerHTML = "";
}

// generate a random number between 1-100
function getRandomNumber(){
  let randomNumber = Math.ceil(Math.random() * 100);
  return randomNumber;
}

// Save the guess history
function saveGuessHistory(guess) {
guesses.push(guess);
}

// Display the guess history to the user
function displayHistory() {
  let index = guesses.length -1; 
  let list = "<ul class='list-group'>";
  while(index >= 0){
    list+= "<ul class='list-group'>" + 
    "You Guessed " + guesses[index] + "</li>"; 
    index-=1;
  }
    list += '</ul>'
  document.getElementById("history").innerHTML = list;
}

// Display correct dialog based off wether the guess is wrong or correct
function getDialog(dialogType, text){
  let dialog;
  switch(dialogType){
    case "warning":
      dialog = "<div class='alert alert-warning' role='alert'>"
      break;
    case "won":
      dialog = "<div class='alert alert-success' role='alert'>"
      break;
  }
  dialog += text;
  dialog += "</div>"
  return dialog;
}

function showYouWon(){
  const text = "Awesome job, you got it!"
  
// Retrieve the dialog using getDialog function and save it to a variable called dialog
  let dialog = getDialog('won', text);
  document.getElementById("result").innerHTML = dialog;
}

function showNumberAbove(){
  const text = "Your guess is too high!"
  let dialog = getDialog('warning', text);
  document.getElementById("result").innerHTML = dialog;
}

function showNumberBelow(){
  const text = "Your guess is too low!"
  let dialog = getDialog('warning', text);
  document.getElementById("result").innerHTML = dialog;
}
