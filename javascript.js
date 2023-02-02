function getComputerChoice () {
	let result = Math.floor(Math.random() * 3) + 1;
	if (result == 1){
        return 'rock';
    } else if (result == 2){
        return 'paper';
    } else return 'scissors';
};


function playRound (){
    let computerSelection = getComputerChoice();
    let playerSelection = prompt('Rock, Paper, or Scissors').toLowerCase();
    if (!['rock', 'paper', 'scissors'].includes(playerSelection)){
        return 'Error - Invalid selection';
    } else if (playerSelection == computerSelection) {
        return `Draw! You both picked ${computerSelection}!`;
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return `You win! Computer picked ${computerSelection}!`
    } else return `You lost! Computer picked ${computerSelection}!`
};






let rounds = prompt('How many rounds do you want to play?');

function playGame (){
   for (i = 0; i < rounds; i++) {
        console.log(playRound());
    }
}

playGame();



