const buttons = document.querySelectorAll("button");
const reset = document.querySelector("#reset");
const player = document.querySelector("#playerScore");
const computer = document.querySelector("#computerScore");
const roundUpdate = document.querySelector("#roundResult");
const announceWinner = document.querySelector("#final");
const choice = document.querySelector("#choice");
const instruction = document.querySelector("#instruct");
const inst = document.querySelector(".inst");

const choices = ["Rock", "Scissors", "Paper"];
let playerScore = 0;
let computerScore = 0;

instruction.addEventListener("click", () => {
  inst.classList.toggle("show");
});

reset.addEventListener("click", () => {
  playerScore = 0;
  computerScore = 0;
  player.textContent = 0;
  computer.textContent = 0;
  roundUpdate.textContent = "";
  choice.innerHTML = "";
  announceWinner.textContent = "Awaiting Winner";
  return;
});

// Add click event listeners to buttons
buttons.forEach(function (button) {
  button.addEventListener("click", (e) => {
    if (playerScore >= 5 || computerScore >= 5) {
      roundUpdate.textContent = "Game over. Reset scores to play again.";
      if (playerScore === 5) {
        announceWinner.textContent = " CONGRATULATION!!! YOU WIN";
      } else {
        announceWinner.textContent = " OOOH!!! YOU LOST";
      }
      return;
    }
    const playerChoice = button.value;
    const computerChoice = getComputerChoice();
    const roundResult = playRound(playerChoice, computerChoice);

    player.textContent = roundResult[1];
    computer.textContent = roundResult[2];
    roundUpdate.textContent = roundResult[0];
    choice.innerHTML = `<h2>You selected: ${playerChoice} <br> computer selected: ${computerChoice} </h2>`;
  });
});

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    const draw = "Tie";
    return [draw, playerScore, computerScore];
  } else if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Scissors" && computerSelection === "Paper") ||
    (playerSelection === "Paper" && computerSelection === "Rock")
  ) {
    const playerWon = "You win";
    playerScore += 1;
    return [playerWon, playerScore, computerScore];
  } else if (
    (computerSelection === "Rock" && playerSelection === "Scissors") ||
    (computerSelection === "Scissors" && playerSelection === "Paper") ||
    (computerSelection === "Paper" && playerSelection === "Rock")
  ) {
    const computerWon = "Computer won";
    computerScore += 1;
    return [computerWon, playerScore, computerScore];
  }
}
