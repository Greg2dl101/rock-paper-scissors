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

  if (
    (playerSelection == "ROCK" && computerSelection == "SCISSORS") ||
    (playerSelection == "PAPER" && computerSelection == "ROCK") ||
    (playerSelection == "SCISSORS" && computerSelection == "PAPER")
  ) {
    playerScore = playerScore + 1;
    return `You Win! ${playerSelection} beats ${computerSelection}!`;
  } else if (
    (playerSelection == "ROCK" && computerSelection == "PAPER") ||
    (playerSelection == "PAPER" && computerSelection == "SCISSORS") ||
    (playerSelection == "SCISSORS" && computerSelection == "ROCK")
  ) {
    computerScore = computerScore + 1;
    return `Computer Wins! ${computerSelection} beats ${playerSelection}`;
  } else {
    return "It's a tie!";
  }
}

buttons.forEach((button) =>
  button.addEventListener("click", (e) => {
    computerSelection = computerPlay();
    playerSelection = e.target.id;

    resultDisplay.innerHTML = playRound(playerSelection, computerSelection);

    userDisplay.innerHTML = playerScore;

    computerDisplay.innerHTML = computerScore;

    if (playerScore === 5 || computerScore === 5) {
      resultDisplay.innerHTML = `${playRound(
        playerSelection,
        computerSelection
      )} ${declareWinner(playerScore, computerScore)}`;
      resetScores();
    }
  })
);

function declareWinner() {
  if (playerScore >= 5 || computerScore >= 5) {
    if (playerScore > computerScore) {
      return "You win it all!";
    }
    if (playerScore < computerScore) {
      return "You lost it all!";
    }
  } else {
    return "";
  }
}

function resetScores() {
  playerScore = 0;
  computerScore = 0;
}
