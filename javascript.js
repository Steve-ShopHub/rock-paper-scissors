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






function getComputerChoice () {
	let result = Math.floor(Math.random() * 3) + 1;
	if (result == 1){
        return 'rock';
    } else if (result == 2){
        return 'paper';
    } else return 'scissors';
};






function playerPicksRock (){
    playerSelection = 'rock';
    playRound();
    playerWinsText.textContent = winTally;
    roundTallyText.textContent = roundTally;
    computerWinsText.textContent = loseTally;

}

function playerPicksPaper (){
    playerSelection = 'paper';
    playRound();
    playerWinsText.textContent = winTally;
    roundTallyText.textContent = roundTally;
    computerWinsText.textContent = loseTally;
}

function playerPicksScissors (){
    playerSelection = 'scissors';
    playRound();
    playerWinsText.textContent = winTally;
    roundTallyText.textContent = roundTally;
    computerWinsText.textContent = loseTally;
}

rockButton.addEventListener('click', playerPicksRock);
paperButton.addEventListener('click', playerPicksPaper);
scissorsButton.addEventListener('click', playerPicksScissors);







function playRound (){
    let computerSelection = getComputerChoice();
    if (playerSelection == computerSelection) {
        roundTally++;
        return `Draw! You both picked ${computerSelection}!`;
    } else if 
        ((playerSelection == 'rock' && computerSelection ==   'scissors') || (playerSelection == 'paper' && computerSelection == 'rock') || (playerSelection == 'scissors' && computerSelection == 'paper')) {
        roundTally++; winTally++;
        return `You win! Computer picked ${computerSelection}!`
    } else {
    roundTally++; loseTally++;
    return `You lost! Computer picked ${computerSelection}!`
}
};



/*

function playRound() {
    const computerSelection = getComputerChoice();
    switch (playerSelection) {
      case computerSelection:
        draw();
        break;
      case 'rock':
        (computerSelection === 'scissors') ? win() : lose();
        break;
      case 'paper':
        (computerSelection === 'rock') ? win() : lose();
        break;
      case 'scissors':
        (computerSelection === 'paper') ? win() : lose();
        break;
    }
  };

  */


/*

function playRound(){
    let computerSelection = getComputerChoice();
    if (playerSelection == computerSelection) {
        draw ();
    } else if 
    ((playerSelection == 'rock' && computerSelection ==   'scissors') || (playerSelection == 'paper' && computerSelection == 'rock') || (playerSelection == 'scissors' && computerSelection == 'paper')) {
        win ();
    } else { lose ();

}
};


function draw(){
    roundTally++;
    return `Draw! You both picked ${computerSelection}!`;
};

function win () {
    roundTally++; winTally++;
    return `You win! Computer picked ${computerSelection}!`
};

function lose(){
    roundTally++; loseTally++;
    return `You lost! Computer picked ${computerSelection}!`
}

*/



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





// Loop to repeat prompt until correct entry

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

