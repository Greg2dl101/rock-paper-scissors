const buttons = document.querySelectorAll("button");
const resultDisplay = document.querySelector("#result-display");
const userDisplay = document.querySelector("#user-display");
const computerDisplay = document.querySelector("#computer-display");

let playerSelection;
let computerSelection;

let playerScore = 0;
let computerScore = 0;

function computerPlay() {
  const selectionArray = ["ROCK", "PAPER", "SCISSORS"];

  return selectionArray[Math.floor(Math.random() * selectionArray.length)];
}

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

buttons.forEach((button) =>
  button.addEventListener("click", (e) => {
    computerSelection = computerPlay();
    playerSelection = e.target.id;

    resultDisplay.innerHTML = playRound(playerSelection, computerSelection);

    userDisplay.innerHTML = playerScore;

    computerDisplay.innerHTML = computerScore;

    if (playerScore >= 5 || computerScore >= 5) {
      resultDisplay.innerHTML = declareWinner(playerScore, computerScore);
      resetScores();
    }
  })
);

function declareWinner() {
  if (playerScore >= 5 || computerScore >= 5) {
    if (playerScore > computerScore) {
      return "You Win!";
    }
    if (playerScore < computerScore) {
      return "You Lose!";
    }
  } else {
    return "";
  }
}

function resetScores() {
  playerScore = 0;
  computerScore = 0;
}
