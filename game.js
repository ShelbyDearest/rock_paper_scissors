const options = ["rock", "paper", "scissors"];

function playGame() {

    humanSel = "";
    computerSel = "";
    humanChoice = "";
    computerChoice = "";
    humanScore = 0;
    computerScore = 0;

    function playRound(humanChoice, computerChoice) {

    function getHumanChoice() {
    let humanChoice = prompt("Please enter your choice: rock, paper, or scissors");
    console.log(humanChoice);
    return humanChoice; }

    humanSel = getHumanChoice();

    function getComputerChoice() {
    let computerChoice = options[Math.floor(Math.random() * options.length)];
    console.log(computerChoice); 
    return computerChoice; } 
    
    computerSel = getComputerChoice(); 

    if (humanSel === computerSel) {
    console.log("It's a tie! You both chose " + humanSel + "."); 
    humanScore++;
    computerScore++; 
    console.log("Score: Player = " + humanScore + ", Computer = " + computerScore + ".");
    return humanScore;
    return computerScore; }

    if (
    (humanSel === "rock" && computerSel === "scissors") ||
    (humanSel === "paper" && computerSel === "rock") ||
    (humanSel === "scissors" && computerSel === "paper") ) {
    console.log("You win! " + humanSel + " beats " + computerSel + ".");
    humanScore++;
    console.log("Score: Player = " + humanScore + ", Computer = " + computerScore + "."); 
    return humanScore; }

    else {
    console.log("You lose! " + computerSel + " beats  " + humanSel + ".");
    computerScore++;
    console.log("Score: Player = " + humanScore + ", Computer = " + computerScore + "."); 
    return computerScore; }
    }
    
    for (i = 0; i <= 4; i++) {
        
        playRound(humanChoice, computerChoice); }

        if (humanScore > computerScore) {
           return console.log("You win the game! Kudos!"); }
        else if (humanScore < computerScore) {
           return console.log("You lost the game! Better luck next time!"); }
        else {
           return console.log("Score: Player = " + humanScore + ", Computer = " + computerScore + "."); }
        }
    

        playGame(); 