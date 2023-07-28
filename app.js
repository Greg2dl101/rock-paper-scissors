const buttons = document.querySelectorAll("button");
const resultDisplay = document.querySelector("#result-display");
const userDisplay = document.querySelector("#user-display");
const computerDisplay = document.querySelector("#computer-display");
const displayWinner = document.querySelector("#display-winner");

let playerSelection;
let computerSelection;

//score variables
let playerScore = 0;
let computerScore = 0;

//selects random item from array as computer selection
function computerPlay() {
  const selectionArray = ["ROCK", "PAPER", "SCISSORS"];

  return selectionArray[Math.floor(Math.random() * selectionArray.length)];
}

//determines winner based on player inputs and cp selection
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toUpperCase();

  if (playerSelection == "ROCK" && computerSelection == "SCISSORS") {
    playerScore = playerScore + 1;
    return "You Win! Rock beats Scissors!";
  }
  if (playerSelection == "ROCK" && computerSelection == "PAPER") {
    computerScore = computerScore + 1;
    return "Computer Wins! Paper beats Rock!";
  }
  if (playerSelection == "ROCK" && computerSelection == "ROCK") {
    return "It's a tie!";
  }
  if (playerSelection == "PAPER" && computerSelection == "SCISSORS") {
    computerScore = computerScore + 1;
    return "Computer Wins! Scissors beats Paper!";
  }
  if (playerSelection == "PAPER" && computerSelection == "PAPER") {
    return "It's a tie!";
  }
  if (playerSelection == "PAPER" && computerSelection == "ROCK") {
    playerScore = playerScore + 1;
    return "You Win! Paper beats Rock!";
  }
  if (playerSelection == "SCISSORS" && computerSelection == "SCISSORS") {
    return "It's a tie!";
  }
  if (playerSelection == "SCISSORS" && computerSelection == "PAPER") {
    playerScore = playerScore + 1;
    return "You Win! Scissors beats Paper!";
  }
  if (playerSelection == "SCISSORS" && computerSelection == "ROCK") {
    computerScore = computerScore + 1;
    return "Computer Wins! Rock beats Scissors!";
  }
}

//uses two callbacks to play a round of rock, paper, scissors
buttons.forEach((button) =>
  button.addEventListener("click", (e) => {
    computerSelection = computerPlay();
    playerSelection = e.target.id;

    resultDisplay.innerHTML = playRound(playerSelection, computerSelection);

    userDisplay.innerHTML = playerScore;

    computerDisplay.innerHTML = computerScore;

    displayWinner.innerHTML = declareWinner(playerScore, computerScore);
  })
);

// Declares winner after 5 rounds!!!
function declareWinner(playerScore, computerScore) {
  if (playerScore >= 5 || computerScore >= 5) {
    if (playerScore > computerScore) {
      return "You Win!";
    }
    if (playerScore < computerScore) {
      return "You Lose!";
    }
  } else {
    return "Keep Playing!";
  }
}
