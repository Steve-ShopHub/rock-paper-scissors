
function countdown(){
for (i=10; i>0; i--) {
    console.log(i);
    }
}

countdown()







/*

const fruit = ['apple', 'pear', 'banana', 'orange', 'strawberry'];

const pets = ['Jasper', 'Jacob', 'Shannon', 'Tramp'];


function myFav(arrayName){
    let sentence = 'My favourite pets are ';
    for (i=0; i<arrayName.length-1; i++ ) {
        sentence += arrayName[i] + ',' + ' ';
    } sentence += 'and ' + arrayName[arrayName.length-1] + '!';
    return sentence;

}

alert(myFav(pets));

*/



/*

const fruit = ['apple', 'pear', 'banana', 'orange', 'strawberry'];

const pets = ['Jasper', 'Jacob', 'Shannon', 'Tramp'];

const myFavPets = 'My favourite pets are called ';

let myFavList = myFavPets;


for (i = 0; i < pets.length-1; i++) {
    myFavList += pets[i] + ',' + ' ';
 } 
    
myFavList += 'and ' + pets[pets.length-1] + '!';

alert(myFavList);

*/

/*
const pets = ['Jasper', 'Jacob', 'Shannon', 'Tramp'];


function createSentence (arrayName) {
    let myFavList = 'My favourite ' + arrayName + 'are';
    for (i = 0; i < arrayName[arrayName.length-1]; i++) {
        myFavList += arrayName[i] + ' ';
    } myFavList += 'and' + arrayName[arrayName.length];
}



alert(createSentence(pets))

*/

/* I want to list my favourite cats in a sentence */


/*
function createArrayList(arrayName) {
    let list = "<ul>" + "\n";
    for (const i of fruit) {
        list += "<li>" + arrayName[i] + "</li>" + "\n";
        }
    list += "</ul>";
    console.log(list);
}

createArrayList(fruit);


*/

/*

const cats = ['Leopard', 'Jaguar', 'Lion', 'Tiger'];


const filtered = cats.filter(cat => cat.startsWith('L'));

    
console.log(filtered);

alert(filtered);



*/

/* 
for (let i=2; i<6; i++) {
    let message = 'hello world';
    message += " " + i 
    console.log(message);
}




/*

const fruit = ['apple', 'pear', 'banana', 'orange', 'strawberry'];


function createArrayList(arrayName) {
    let list = "<ul>" + "\n";
    for (let i = 0; i < arrayName.length; i++) {
        list += "<li>" + arrayName[i] + "</li>" + "\n";
    }
    list += "</ul>";
    console.log(list);
}

let fruitSlice = fruit.slice(1);
console.log(fruitSlice);

fruit.pop(fruit);

console.log(fruit);
console.log(fruit.toString());
console.log(fruit.join('\n' + 'parting' + '\n'));

*/



/*createArrayList(fruit);*/

/* Create a function that turns array items into an <ul> 

1) Create <ul>
2) Create <li>, then add first array item, then add </li>
3) On next line, add <li> with second array item, then add </li>
4) Repeat until last array item is reached
5) Close off with </ul>

*/ 


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