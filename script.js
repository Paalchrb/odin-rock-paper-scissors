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
 * @returns {string} The string returned declares the winner (or a tie)
 */
function playRound(playerSelection, computerSelection) {
  const player = playerSelection.toLowerCase();
  const computer = computerSelection.toLocaleLowerCase();
  if(player === "rock") {
    if(computer === "scissors") {
      return "You win! Rock beats Scissors";
    } else if(computer === "paper") {
      return "You loose! Paper beats Rock";
    } else {
      return "It's a tie. Both picked Rock";
    }
  }
  else if(player === "paper") {
    if(computer === "rock") {
      return "You win! Paper beats rock";
    } else if(computer === "scissors") {
      return "You loose! Scissors beats paper";
    } else {
      return "It's a tie. Both picked Paper";
    }
  }
  else if(player === "scissors") {
    if(computer === "paper") {
      return "You win! Scissors beats Paper";
    } else if(computer === "rock") {
      return "You loose! Rock beats Scissors";
    } else {
      return "It's a tie. Both picked Scissors";
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
