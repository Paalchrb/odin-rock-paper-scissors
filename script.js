const VALID_SELECTIONS = ["rock", "paper", "scissors"];

/**
 * @function getComputerChoice
 * @returns {string} possible values: "rock", "paper", "scissors"
 */
function getComputerChoice() {
  return VALID_SELECTIONS[Math.floor(Math.random() * 3)];
}

/**
 * @function playRound
 * @param {string} playerSelection 
 * @param {string} computerSelection
 * @returns {string} return one of the following strings "win", "loss", "tie"
 */
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLocaleLowerCase();

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


/**
 * @function validateInput Validates that the player has picked either rock, paper or scissor
 * @param {*} input 
 */
function validateInput(input) {
  if(typeof input !== "string") {
    return false;
  }

  if(!VALID_SELECTIONS.includes(input.toLowerCase())) {
    return false;
  }

  return true;
}


/**
 * @function game Simulates the numRounds number of rounds of rock, paper, scissors and returns the winner
 * @param {string} numRounds The number if games
 * @return {string} String that states whoever won the game
 */
function game(numRounds = 5) {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < numRounds; i++) {
    const computerChoice = getComputerChoice();
    
    let playerChoice= prompt("Make your choice: Rock, Paper or Scissors?");

    while(!validateInput(playerChoice)) {
      playerChoice= prompt("Wrong input, try again: Rock, Paper or Scissors?");
    }

    const result =  playRound(playerChoice, computerChoice);

    if(result === "win") {
      playerScore++;
    } else if (result === "loss") {
      computerScore++;
    }
  }

  if(playerScore > computerScore) {
    return `Congratulations, you won ${playerScore} - ${computerScore}`;
  } else if (playerScore < computerScore) {
    return `Oh no, you lost ${playerScore} - ${computerScore}`;
  } else {
    return `It's a tie. The result is ${playerScore} - ${computerScore}`;
  }
}

console.log(game(5));
