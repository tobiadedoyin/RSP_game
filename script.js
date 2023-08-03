const choices = ["Rock", "Scissors", "Paper"];
let playerScore = 0;
let computerScore = 0;

function playerChoice() {
  const enterChoice = prompt("Type 'Rock', 'Scissors', 'Paper':");
  const playerChoiceConverted = enterChoice
    .charAt(0)
    .toUpperCase()
    .concat(enterChoice.slice(1).toLowerCase());
  console.log(`player: ${playerChoiceConverted}`);
  return playerChoiceConverted;
}

function computerChoice() {
  const random = Math.floor(Math.random() * 2);
  const result = choices[random];
  console.log(`computer: ${result}`);
  return result;
}

playRound(playerChoice(), computerChoice());

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    const draw = "Tie";
    console.log("Tie");

    return draw;
  } else if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Scissors" && computerSelection === "Paper") ||
    (playerSelection === "Paper" && computerSelection === "Rock")
  ) {
    const playerWon = "you win";
    console.log(playerWon);
    playerScore += 1;
    console.log("when a player win :=>" + playerScore, computerScore);
    return playerWon, playerScore, computerScore;
  } else if (
    (computerSelection === "Rock" && playerSelection === "Scissors") ||
    (computerSelection === "Scissors" && playerSelection === "Paper") ||
    (computerSelection === "Paper" && playerSelection === "Rock")
  ) {
    const computerWon = "computer won";
    console.log(computerWon);
    computerScore += 1;
    console.log("when computer win:=>" + playerScore, computerScore);
    return computerWon, playerScore, computerScore;
  }
}

function game() {
  let i = 1;
  while (i < 5) {
    const getScore = playRound(playerChoice(), computerChoice());
    console.log(`round: ${i + 1}`);
    //return `${i + 1} :=> ${getScore}`;
    i++;
  }
}
game();

console.log("after 5 rounds the winner is:");
if (playerScore === computerScore) {
  console.log("draw");
} else if (playerScore > computerScore) {
  console.log(`you won by a score: ${playerScore} : ${computerScore}`);
} else {
  console.log(`computer won by a score: ${computerScore} : ${playerScore}`);
}
