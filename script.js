const choices = ["Rock", "Scissors", "Paper"];

// const playerChoice = prompt("Type 'Rock', 'Scissors', 'Paper':");
// const playerChoiceConverted = playerChoice
//   .charAt(0)
//   .toUpperCase()
//   .concat(playerChoice.slice(1).toLowerCase());

function playerChoice() {
  const enterChoice = prompt("Type 'Rock', 'Scissors', 'Paper':");
  const playerChoiceConverted = enterChoice
    .charAt(0)
    .toUpperCase()
    .concat(enterChoice.slice(1).toLowerCase());
  console.log(playerChoiceConverted);
  return playerChoiceConverted;
}

function computerChoice() {
  const random = Math.floor(Math.random() * 2);
  const result = choices[random];
  console.log(result);
  return result;
}

function round(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log("Tie");
  } else if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Scissors" && computerSelection === "Paper") ||
    (playerSelection === "Paper" && computerSelection === "Rock")
  ) {
    const playerWon = "you win";
    console.log(playerWon);
    return playerWon;
  } else if (
    (computerSelection === "Rock" && playerSelection === "Scissors") ||
    (computerSelection === "Scissors" && playerSelection === "Paper") ||
    (computerSelection === "Paper" && playerSelection === "Rock")
  ) {
    const computerWon = "computer won";
    console.log(computerWon);
    return computerWon;
  }
}

round(playerChoice(), computerChoice());
