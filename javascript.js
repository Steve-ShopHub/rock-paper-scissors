//Add .win class toggle thing when count

// Add funny sound when clicked

// Add images to game screen when clicked



const winTitle = document.querySelector('.counter.player-wins');
const roundsTitle = document.querySelector('.counter.round');
const loseTitle = document.querySelector('.counter.computer-wins');
const drawTitle = document.querySelector('.counter.draw');

const rockButton = document.querySelector('.button.rock');
const paperButton = document.querySelector('.button.paper');
const scissorsButton = document.querySelector('.button.scissors');



let winTally = 0;
let roundTally = 0;
let loseTally = 0;
let drawTally = 0;




function hideImg() {
    const rockImgs =  document.querySelector('.player.screen .choice.rock');
    const paperImgs =  document.querySelector('.player.screen .choice.paper');
    const scissorsImgs =  document.querySelector('.player.screen .choice.scissors');

    rockImgs.style.display = '';
    paperImgs.style.display = '';
    scissorsImgs.style.display = '';

    const rockImgsComp =  document.querySelector('.computer.screen .choice.rock');
    const paperImgsComp =  document.querySelector('.computer.screen .choice.paper');
    const scissorsImgsComp =  document.querySelector('.computer.screen .choice.scissors');

    rockImgsComp.style.display = '';
    paperImgsComp.style.display = '';
    scissorsImgsComp.style.display = '';



};



function getComputerChoice () {
	let result = Math.floor(Math.random() * 3) + 1;
	if (result == 1){
        document.querySelector('.computer .rock').style.display = 'block';
        return 'rock';
    } else if (result == 2){
        document.querySelector('.computer .paper').style.display = 'block';
        return 'paper';
    } else if (result == 3){
        document.querySelector('.computer .scissors').style.display = 'block';
}       return 'scissors';
};



function updateTally () {
    playerWinsText.textContent = winTally;
    roundTallyText.textContent = roundTally;
    computerWinsText.textContent = loseTally;
    drawTallyText.textContent = drawTally;
}


function playerPicksRock (){
    hideImg();
    playerSelection = 'rock';
    document.querySelector('.player .rock').style.display = 'block';
    playRound();
    updateTally();


}

function playerPicksPaper (){
    hideImg();
    playerSelection = 'paper';
    document.querySelector('.player .paper').style.display = 'block';
    playRound();
    updateTally();

}

function playerPicksScissors (){
    hideImg();
    playerSelection = 'scissors';
    document.querySelector('.player .scissors').style.display = 'block';
    playRound();
    updateTally();

}

rockButton.addEventListener('click', playerPicksRock);
paperButton.addEventListener('click', playerPicksPaper);
scissorsButton.addEventListener('click', playerPicksScissors);







function playRound (){
    let computerSelection = getComputerChoice();
    if (playerSelection == computerSelection) {
        roundTally++; drawTally++;
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

const drawTallyText = document.createElement('h2');
drawTallyText.classList.add('draw-tally-text');
drawTallyText.textContent = drawTally;
drawTitle.appendChild(drawTallyText);



/*

// Choice images for game screen

const rockChoiceImage = document.createElement('img');
rockChoiceImage.src = "img/rock.gif"
// Add size styles

const paperChoiceImage = document.createElement('img');
paperChoiceImage.src = "img/paper.gif";

const scissorsChoiceImage = document.createElement('img');
paperChoiceImage.src = "img/scissors.gif";


let playerChoiceScreen = document.querySelector('.player.screen');
let computerChoiceScreen = document.querySelector('.computer.screen');

*/




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

