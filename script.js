/**
 * @function getComputerChoice
 * @returns {string} possible values: "rock", "paper", "scissors"
 */
function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];

  return options[Math.floor(Math.random() * 3)];
}

/**
 * @function playRound
 * @param {string} playerSelection 
 * @param {string} computerSelection
 * @returns {string} return one of the following strings "win", "loss", "tie"
 */
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  if(playerSelection === "rock") {
    if(computerSelection === "scissors") {
      console.log("You win! Rock beats Scissors");
      return "win";
    } else if(computerSelection === "paper") {
      console.log("You loose! Paper beats Rock");
      return "loss";
    } else {
      console.log("It's a tie. Both picked Rock");
      return "tie";
    }
  } else if(playerSelection === "paper") {
    if(computerSelection === "rock") {
      console.log("You win! Paper beats rock");
      return "win";
    } else if(computerSelection === "scissors") {
      console.log("You loose! Scissors beats paper");
      return "loss";
    } else {
      console.log("It's a tie. Both picked Paper");
      return "tie";
    }
  } else if(playerSelection === "scissors") {
    if(computerSelection === "paper") {
      console.log("You win! Scissors beats Paper");
      return "win";
    } else if(computerSelection === "rock") {
      console.log("You loose! Rock beats Scissors");
      return "loss";
    } else {
      console.log("It's a tie. Both picked Scissors");
      return "tie";
    }
  }
}
 
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

// To play a game of 5:
  // Use a iterator to play 5 rounds
  // Call the round function for each iteration
  // Update the score of the game winner
  // Announce final score after 5 games
