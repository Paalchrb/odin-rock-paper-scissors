// Randomly pick a computer choice
function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];

  return options[Math.floor(Math.random() * 3)];
}

console.log(getComputerChoice());
  // Get user input
  // Make sure input is valid "Rock", "Paper" or "Scissors"
  // Decide who wins
  // Let user know the result

// To play a game of 5:
  // Use a iterator to play 5 rounds
  // Call the round function for each iteration
  // Update the score of the game winner
  // Announce final score after 5 games
