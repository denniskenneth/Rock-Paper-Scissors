// FUNCTION THAT RANDOMLY RETURNS ROCK, PAPER OR SCISSORS
function computerPlay() {
    let computerPick = ['Rock', 'Paper', 'Scissors'];
    let pick = computerPick [Math.floor(Math.random() * computerPick.length)];

    return pick;
}

//ROUND OF THE GAME
function playRound(playerSelection, computerSelection) {
    let result;
    switch(playerSelection.toUpperCase()){
        case 'ROCK':
            if(computerSelection == 'Rock') {
                result = 'it\'s a tie';
                break;
            }
            else if (computerSelection == 'Paper') {
                result = 'you lose!!, Paper beats Rock any day';
                break;
            }
            else {
                result = 'Congrats, you win Rock beats Scissors';
                break;
            }
            break;
        
        case 'PAPER':
            if(computerSelection == 'Rock') {
                result = 'Congrats, you win Paper beats Rock';
                break;
            }
            else if (computerSelection == 'Paper') {
                result = 'it\'s a tie';
                break;
            }
            else {
                result = 'you lose!!, Scissors beats Paper';
                break;
            }
            break;

            case 'SCISSORS':
                if(computerSelection == 'Rock') {
                    result = 'you lose!!, Rock beats Scissors';
                    break;
                }
                else if (computerSelection == 'Paper') {
                    result = 'Congrats you win,Scissors beats Paper any day';
                    break;
                }
                else {
                    result = 'it\'s a tie';
                    break;
                }

            default:
                result = 'Please enter a valid input';
                break;
        
    }
        
    return result;
}

// GAME CODE
function game() {

}