const fruit = ['apple', 'pear', 'banana'];

console.log(fruit[1]);

alert('hello');












/*

Create function that randomly returns the string 'Rock', 'Paper', or 'Scissors'.


1) Create random number generator between 1-3
2) Let rock = 1, paper = 2, scissors =3


3) If randomNumber = 1, log 'rock'
4) If randomNumber = 2, log 'paper'
5) If randomNumber = 3, log 'scissors'

const rock = 'Rock';
const paper = 'Paper';
const scissors = 'Scissors';

function getComputerChoice () {
    let rock = 1;
    let paper = 2;
    let scissors = 3;

    function randomNumber (min, max) {
return Math.floor(Math.random() * (max - min) + min);
}

*/

/*

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() *3)];
}

function singleGameRound(){
    let playerSelection = prompt('Enter rock, paper or scissors').toLocaleLowerCase();
    if (!['rock', 'paper', 'scissors'].includes(playerSelection)) {
        return 'Enter a valid value'
    } 
    let computerSelection = getComputerChoice();
    if (playerSelection === computerSelection) {
        return `Draw! You both picked ${playerSelection}!`
    } 
    if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
     (playerSelection === 'paper' && computerSelection === 'rock') ||
     (playerSelection === 'scissors' && computerSelection === 'paper')) {
     return `You win! ${playerSelection}`;
     }      
     else return `You lose! ${computerSelection} beats ${playerSelection}!`
   
}

*/

/*

function game() {
    for (let i = 0; i < 5; i++)
        alert(singleGameRound(i));
    }

game();

*/



/*


function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * 3)];
  }
  
  function singleGameRound () {
    let playerSelection = prompt('Rock, Paper, or Scissors?').toLowerCase();
    if (!['rock', 'paper', 'scissors'].includes(playerSelection)) {
      return 'Enter valid input';
    }
    let computerSelection = getComputerChoice();
    if (playerSelection === computerSelection) {
      return `Computer picked ${computerSelection}! You draw!`;
    }
    if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')) {
      return `Computer picked ${computerSelection}! You win!`;
    }
    else return `Computer picked ${computerSelection}! You lose!`;
  }
  
  alert(singleGameRound());


/*

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber === 1) { 
        return 'rock';
    } else if (randomNumber === 2) {
        return 'paper'
    } else if (randomNumber === 3) {
        return 'scissors'
    }
}

*/

/*

console.log(getComputerChoice());


function singleGameRound () {
    let playerSelection = prompt('Rock, Paper, or Scissors?').toLocaleLowerCase();
    let computerSelection = getComputerChoice();
    if (playerSelection != 'rock' && playerSelection != 'paper' && playerSelection != 'scissors') {
        return 'Enter valid input'
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'Computer picked scissors! You win!'
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'Computer picked paper! You lose!'
    } else if (playerSelection === 'rock' && computerSelection === 'rock') {
        return 'Computer picked rock! You draw!'
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'Computer picked Scissors! You lose!'
    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
        return 'Computer picked paper! You draw!'
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'Computer picked rock! You win!'
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        return 'Computer picked scissors! You draw!'
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'SComputer picked paper! You win!'
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'Computer picked rock! You lose!'  
    }
}





   
alert(singleGameRound());


    








// function randomNumber () {
//     return Math.floor(Math.random() * (4 - 1) + 1);    
// }


// const randomNumberValue = randomNumber();

// function getComputerChoice () {
//     if (randomNumberValue == 1) {
//     return 'Rock'
//     } else if (randomNumberValue == 2) {
//         return 'Paper'
//     } else if (randomNumberValue == 3) {
//         return 'Scissors'
//     }
// }

// console.log(getComputerChoice());







    




*/