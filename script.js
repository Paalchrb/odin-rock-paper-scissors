const VALID_SELECTIONS = ["rock", "paper", "scissors"];

let playerScore = 0;
let computerScore = 0;


/**
 * @function capitalizeString
 * @description Takes a string as argument and return a capitalized version of the given string
 * @param {string} str 
 * @returns {string}
 */
function capitalizeString(str) {
  str = str.toLowerCase();

  return str.charAt(0).toUpperCase() + str.slice(1);
}


/**
 * @function getComputerChoice
 * @description Randomly return the computer choice as either "rock", "paper" or "scissors"
 * @returns {string}
 */
function getComputerChoice() {
  return VALID_SELECTIONS[Math.floor(Math.random() * 3)];
}


/**
 * @function getResultString
 * @description Return a string that describes the result of the played round
 * @param {string} playerSelection "rock", "paper" or "scissors"
 * @param {string} computerSelection "rock", "paper" or "scissors"
 * @returns {string} 
 */
function getResultString(playerSelection, computerSelection) {
  if(
    ( playerSelection === "rock" && computerSelection === "scissors" ) ||
    ( playerSelection === "paper" && computerSelection === "rock" ) ||
    ( playerSelection === "scissors" && computerSelection === "paper" )
  ) {
    return `You win! ${capitalizeString(playerSelection)} beats ${computerSelection} every time!`
  } else if (
    ( playerSelection === "rock" && computerSelection === "paper" ) ||
    ( playerSelection === "paper" && computerSelection === "scissors" ) ||
    ( playerSelection === "scissors" && computerSelection === "rock" )
  ) {
    return `You loose! ${capitalizeString(playerSelection)} is beaten by ${computerSelection}!`
  } else {
    return `It's a tie! Both players picked ${playerSelection}`;
  }
}


/**
 * @function displayRoundResult
 * @description Takes the round result string as argument and updates the DOM to display round result
 * @param {string} str 
 */
function displayRoundResult(str) {
  const roundP = document.querySelector("p.round-score");
  roundP.textContent = str;
}


/**
 * @function updateScore
 * @description Update player or computer score based on the result of the given round
 * @param {*} playerSelection "rock", "paper" or "scissors"
 * @param {*} computerSelection "rock", "paper" or "scissors"
 */
function updateScore(playerSelection, computerSelection) {
  if(
    ( playerSelection === "rock" && computerSelection === "scissors" ) ||
    ( playerSelection === "paper" && computerSelection === "rock" ) ||
    ( playerSelection === "scissors" && computerSelection === "paper" )
  ) {
    playerScore++;
  } else if (
    ( playerSelection === "rock" && computerSelection === "paper" ) ||
    ( playerSelection === "paper" && computerSelection === "scissors" ) ||
    ( playerSelection === "scissors" && computerSelection === "rock" )
  ) {
    computerScore++;
  }
}


/**
 * @function displayScore
 * @description Takes the player score and computer score as arguments and update the DOM to display the score
 * @param {number} playerScore 
 * @param {number} computerScore 
 */
function displayScore(playerScore, computerScore) {
  const totalSpan = document.querySelector("span.score-count");
  totalSpan.textContent = `${playerScore} - ${computerScore}`;
}



function handleGameEnd(playerScore, computerScore) {
  const container = document.querySelector("div.score");
  
  // disable buttons on game end
  const buttons = document.querySelectorAll("button");
  buttons.forEach(button => button.setAttribute("disabled", "true"));

  const gameEndP = document.createElement("p");
  gameEndP.className="game-end";

  if(playerScore === 5) {
    gameEndP.textContent = "Hoooray!! You won the game!";
  } else if (computerScore === 5) {
    gameEndP.textContent = "Oh nooo! You have lost!";
  }

  
  const restartButton = document.createElement("button");
  restartButton.textContent = "Play again!";

  // Reload browser to reset score and enable choice buttons
  restartButton.addEventListener("click", () => document.location.reload());

  container.appendChild(gameEndP);
  container.appendChild(restartButton);
}


/**
 * @function playRound 
 * @description Simulates the necessary action to play a round and display the round score and game score to the DOM
 * @param {string} playerSelection "rock", "paper" or "scissors"
 * @param {string} computerSelection "rock", "paper" or "scissors"
 */
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  const resultString = getResultString(playerSelection, computerSelection);

  displayRoundResult(resultString);

  updateScore(playerSelection, computerSelection);
  
  displayScore(playerScore, computerScore);

  if(playerScore === 5 || computerScore === 5) {
    handleGameEnd(playerScore, computerScore);
  }
}


// Add event-listener to buttons
const buttons = document.querySelectorAll("button");
buttons.forEach(button => button.addEventListener("click", e => playRound(e.target.id, getComputerChoice())));
