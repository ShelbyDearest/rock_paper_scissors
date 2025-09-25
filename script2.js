// DOM Elements
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const player = document.getElementById('player');
const computer = document.getElementById('computer');
const roundResult = document.getElementById('roundResult');
const gameResult = document.getElementById('gameResult');
const roundCountEl = document.getElementById('roundCountEl');
const playerScoreEl = document.getElementById('playerScoreEl');
const computerScoreEl = document.getElementById('computerScoreEl');
const reset = document.getElementById('reset'); 

// State and score
let round = 0;
let playerScore = 0;
let computerScore = 0;

rock.addEventListener('click', () => playRound('rock'));
paper.addEventListener('click', () => playRound('paper')); 
scissors.addEventListener('click', () => playRound('scissors'));
reset.addEventListener('click', () => resetGame()); 

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerChoice) {
    // Use the DOM elements defined at top (player, computer, roundResult, gameResult)
    // don't redeclare them here or they'll shadow the DOM references.

    if (round >= 5) {
        return; }
    
    const computerChoice = getComputerChoice();

    // Display choices
    player.innerHTML = `Player chose ${playerChoice}`;
    computer.innerHTML = `Computer chose ${computerChoice}`;

    // Increment round 
    round++;
    roundCountEl.innerHTML  = round.toString(); 

    // Determine round winner
    if (playerChoice === computerChoice) {
        roundResult.textContent = "It's a tie!";  }
    else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')) {
        roundResult.textContent = "Player wins the round!";
        playerScore++; }
    else {
        roundResult.textContent = "Computer wins the round!";
        computerScore++; }

    // Update score
    playerScoreEl.innerHTML  = playerScore.toString();
    computerScoreEl.innerHTML = computerScore.toString(); 
    
    // Determine game winner
    if (round === 5) {
        if (playerScore > computerScore) {
            gameResult.textContent = "Player wins the game!"; }
        else if (computerScore > playerScore) {
            gameResult.textContent = "Computer wins the game!"; }
        else { gameResult.textContent = "This game is a tie!"; }

        // Disable buttons until user selects reset
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
    }
}

// Reset game 
function resetGame() {
    round = 0; 
    playerScore = 0;
    computerScore = 0; 
    roundCountEl.textContent = '0';
    playerScoreEl.textContent = '0';
    computerScoreEl.textContent = '0';
    player.textContent = '';
    computer.textContent = '';
    roundResult.textContent = '';
    gameResult.textContent = '';

    rock.disabled = false;
    paper.disabled = false;
    scissors.disabled = false;
}
