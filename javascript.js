//Add .win class toggle thing when count

const winTitle = document.querySelector('.counter.player-wins');
const roundsTitle = document.querySelector('.counter.round');
const loseTitle = document.querySelector('.counter.computer-wins');

const rockButton = document.querySelector('.button.rock');
const paperButton = document.querySelector('.button.paper');
const scissorsButton = document.querySelector('.button.scissors');



let winTally = 0;
let roundTally = 0;
let loseTally = 0;


let computerSelection;
let playerSelection;



function getComputerChoice () {
	computerSelection = Math.floor(Math.random() * 3) + 1;
	if (computerSelection == 1){
        return 'rock';
    } else if (computerSelection == 2){
        return 'paper';
    } else return 'scissors';
};






function playerPicksRock (){
    playerSelection = 'rock';
    getComputerChoice ();
    playRound();
    playerWinsText.textContent = winTally;
    roundTallyText.textContent = roundTally;
    computerWinsText.textContent = loseTally;

}

function playerPicksPaper (){
    playerSelection = 'paper';
    getComputerChoice ();
    playRound();
    playerWinsText.textContent = winTally;
    roundTallyText.textContent = roundTally;
    computerWinsText.textContent = loseTally;
}

function playerPicksScissors (){
    playerSelection = 'scissors';
    getComputerChoice ();
    playRound();
    playerWinsText.textContent = winTally;
    roundTallyText.textContent = roundTally;
    computerWinsText.textContent = loseTally;
}

rockButton.addEventListener('click', playerPicksRock);
paperButton.addEventListener('click', playerPicksPaper);
scissorsButton.addEventListener('click', playerPicksScissors);

function playRound (){
    if (playerSelection == computerSelection) {
        roundTally++;
        return `Draw! You both picked ${computerSelection}!`;
    } else if ((playerSelection == 'rock' && computerSelection == 'scissors') || (playerSelection == 'paper' && computerSelection == 'rock') || (playerSelection == 'scissors' && computerSelection == 'paper')) {
        roundTally++; winTally++;
        return `You win! Computer picked ${computerSelection}!`
    } else {
    roundTally++; loseTally++;
    return `You lost! Computer picked ${computerSelection}!`
}
};

// Bug - only returning end ^^

const playerWinsText = document.createElement('h2');
playerWinsText.classList.add('player-wins-text');
playerWinsText.textContent = winTally;
winTitle.appendChild(playerWinsText);

const roundTallyText = document.createElement('h2');
roundTallyText.classList.add('round-tally-text');
roundTallyText.textContent = roundTally;
roundsTitle.appendChild(roundTallyText);

const computerWinsText = document.createElement('h2');
computerWinsText.classList.add('computer-wins-text');
computerWinsText.textContent = loseTally;
loseTitle.appendChild(computerWinsText);




/*

function getPlayerChoice(){
    while (true) {
    playerSelection = (prompt('Rock, Paper, or Scissors').toLowerCase());
    if (['rock', 'paper', 'scissors'].includes(playerSelection)){
        break;
    }
        alert ('Error - Invalid selection');
}
return playerSelection;
};

*/

