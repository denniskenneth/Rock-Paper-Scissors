// SCORES
let computersScore = 0;
let playersScore = 0;


// FUNCTION THAT RANDOMLY RETURNS ROCK, PAPER OR SCISSORS
function computerPlay() {
    let computerPick = ['rock', 'paper', 'scissors'];
    let pick = computerPick [Math.floor(Math.random() * computerPick.length)];

    return pick;
}

// BUTTON LISTENERS
const rockButton = document.querySelector('#rock-btn');
const paperButton = document.querySelector('#paper-btn');
const scissorsButton = document.querySelector('#scissors-btn');

// SCORES
const playerScoreRec = document.querySelector('#playerScore');
const computerScoreRec = document.querySelector('#computerScore');

const gameResult = document.querySelector('#result');

rockButton.addEventListener('click', chooseRock);
paperButton.addEventListener('click', choosePaper);
scissorsButton.addEventListener('click', chooseScissors);

 // WIN & TIE FUNCTIONS
function playerWins(playerSelection, computerSelection) {
    playersScore++;
    playerScoreRec.textContent = playersScore;
    gameResult.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
}

function computerWins(playerSelection, computerSelection) {
    computersScore++;
    computerScoreRec.textContent = computersScore;
    gameResult.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
}

function tieGame (playerSelection, computerSelection){
    gameResult.textContent = `wow!, its a tie game. ${playerSelection} = ${computerSelection}`;
}

function endGame (text) {
    document.body.innerHTML = `<h2>${text}</h2><a href="${window.location.href}">Wanna play again?</a>`;
}
function restart () {
    window.location.reload();
}

//GAME PLAY
function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay()

    switch(true){
        case (playerSelection == 'rock' && computerSelection == 'scissors'):
        case (playerSelection == 'paper' && computerSelection == 'rock'):
        case (playerSelection == 'scissors' && computerSelection == 'paper'):
            playerWins(playerSelection, computerSelection);
            break;
            
        case (computerSelection == 'rock' && playerSelection == 'scissors'):
        case (computerSelection == 'paper' && playerSelection == 'rock'):
        case (computerSelection == 'scissors' && playerSelection == 'paper'):
            computerWins(playerSelection, computerSelection);
                break;

        case (computerSelection == playerSelection):
            tieGame(playerSelection, computerSelection);
            break;
        
    }
   if (computersScore == 5) {
		endGame('The computer reached 5 first! You lost');
	} else if (playersScore == 5) {
		endGame('You win the game!');
	}

}

// USER INPUT
function chooseRock() {
	playRound('rock', computerPlay());
}

function choosePaper() {
	playRound('paper', computerPlay());
}

function chooseScissors() {
	playRound('scissors', computerPlay());
}