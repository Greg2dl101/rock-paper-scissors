//selects random item from array as computer selection
function computerPlay() {
  const selectionArray = ["ROCK", "PAPER", "SCISSORS"];

  const random =
    selectionArray[Math.floor(Math.random() * selectionArray.length)];

  return random;
}

//for player player selection
function playerPlay() {
  return window.prompt("Select Rock, Paper, or Scissors!");
}

//score variables
let playerScore = 0;
let computerScore = 0;

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

//assigns user and computer selection and plays a round
function game() {
  const playerSelection = playerPlay();
  const computerSelection = computerPlay();
  console.log(playRound(playerSelection, computerSelection));

  console.log(playerScore, computerScore);
}

//function that declares a winner
function declareWinner() {
  let gameCount = 0;

  //plays game to 5 rounds
  while (gameCount < 5) {
    for (let i = 1; i <= 5; i++) {
      game();
      gameCount = i;
      console.log(gameCount);
      //declare winner after five rounds
      if (gameCount == 5) {
        if (playerScore > computerScore) {
          return "You Win!";
        } else {
          return "Computer Wins!";
        }
      }
    }
  }
}

alert(declareWinner());
