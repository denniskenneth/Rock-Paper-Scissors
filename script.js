//ALERT THE USER HOW THE GAME WORKS
alert('This is a rock, paper, scissors game that runs on the console. It runs for 5 rounds click OK to continue');

// FUNCTION THAT RANDOMLY RETURNS ROCK, PAPER OR SCISSORS
function computerPlay() {
    let computerPick = ['Rock', 'Paper', 'Scissors'];
    let pick = computerPick [Math.floor(Math.random() * computerPick.length)];

    return pick;
}


// GAME CODE
function game() {
    for (let counter = 0; counter <= 4; counter++) {
        playRound();
    }

}

function finalresult() {
       
}

//ROUND OF THE GAME
function playRound(playerSelection, computerSelection) {
    playerSelection = prompt('PLease Pick Rock, Paper or Scissors');
    computerSelection = computerPlay()

    let result;
    let counter = 0;
    switch(playerSelection.toUpperCase()){
        case 'ROCK':
            if(computerSelection == 'Rock') {
                result = 'it\'s a tie';
                console.log(result);

            }
            else if (computerSelection == 'Paper') {
                result = 'you lose!!, Paper beats Rock any day';
                console.log(result);

            }
            else {
                result = 'Congrats, you win Rock beats Scissors';
                console.log(result);
            }
            break;
        
        case 'PAPER':
            if(computerSelection == 'Rock') {
                result = 'Congrats, you win Paper beats Rock';
                console.log(result);
            }
            else if (computerSelection == 'Paper') {
                result = 'it\'s a tie';
                console.log(result);
            }
            else {
                result = 'you lose!!, Scissors beats Paper';
                console.log(result);

            }
            break;

            case 'SCISSORS':
                if(computerSelection == 'Rock') {
                    result = 'you lose!!, Rock beats Scissors';
                    console.log(result);
                }
                else if (computerSelection == 'Paper') {
                    result = 'Congrats you win,Scissors beats Paper any day';
                    console.log(result);
                }
                else {
                    result = 'it\'s a tie';
                    console.log(result);
                }
                break;

            default:
                result = 'Please enter a valid input';
                console.log(result);
                break;
        
    }
        
    return result;
}



//FINAL AREA
game();