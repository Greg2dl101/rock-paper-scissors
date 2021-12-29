function computerPlay() {
  let result = Math.floor(Math.random() * 3 + 1);

  if (result == 1) {
    return 'ROCK';
  }
  else if (result == 2) {
    return 'PAPER';
  }
  else {
    return 'SCISSORS';
  }
}

//for player player selection
function playerPlay() {
  return window.prompt("Select Rock, Paper, or Scissors!");
}

//score variables
var playerScore = 0;
let computerScore = 0;

//determines winner based on player inputs and cp selection
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toUpperCase();

  if (playerSelection == 'ROCK' && computerSelection == 'SCISSORS') {
    playerScore  = playerScore + 1;
    return 'You Win! Rock beats Scissors!';
  }
  if (playerSelection == 'ROCK' && computerSelection == 'PAPER') {
    computerScore  = computerScore + 1;
    return 'Computer Wins! Paper beats Rock!';
  }
  if (playerSelection == 'ROCK' && computerSelection == 'ROCK') {
    return "It's a tie!";
  }
  if (playerSelection == 'PAPER' && computerSelection == 'SCISSORS') {
    computerScore  = computerScore + 1;
    return 'Computer Wins! Scissors beats Paper!';
  }
  if (playerSelection == 'PAPER' && computerSelection == 'PAPER') {
    return "It's a tie!";
  }
  if (playerSelection == 'PAPER' && computerSelection == 'ROCK') {
    playerScore  = playerScore + 1;
    return "You Win! Paper beats Rock!";
  }
  if (playerSelection == 'SCISSORS' && computerSelection == 'SCISSORS') {
    return "It's a tie!";
  }
  if (playerSelection == 'SCISSORS' && computerSelection == 'PAPER') {
    playerScore  = playerScore + 1;
    return "You Win! Scissors beats Paper!";
  }
  if (playerSelection == 'SCISSORS' && computerSelection == 'ROCK') {
    computerScore  = computerScore + 1;
    return "Computer Wins! Rock beats Scissors!";
  }
}

//assigns user and computer selection and plays a round
function game() {
  const playerSelection = playerPlay();
  const computerSelection = computerPlay();
  console.log(playRound(playerSelection, computerSelection, playerScore, computerScore));

  console.log(playerScore, computerScore);
}

//plays game to 5 using game function
while (playerScore < 5 && computerScore < 5) {
  game();
}

//Displays winner in alert message in browser
if (playerScore >= 5) {
  alert("You Win!");
}
else {
  alert("Computer Wins!");
}
