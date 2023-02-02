const convertToCelsius = function(fahrenheit) {
    let celsius = ((fahrenheit - 32)*(5/9));
    celsius = Math.round(celsius * 10) / 10;
    return celsius;
};

const convertToFahrenheit = function(celsius) {
    let fahrenheit = ((celsius * (9/5) + 32));
    fahrenheit = Math.round(fahrenheit * 10) / 10;
    return fahrenheit;
    
};

console.log(convertToCelsius(32));
console.log(convertToFahrenheit(0));
console.log(convertToCelsius(100));
console.log(convertToFahrenheit(73.2));

/*

const leapYears = function(year) {
    if (year % 4 == 0 && (!(year % 100 == 0)) || (year % 400 == 0)) {
        return true;
    }  else return false;
    
};



console.log(leapYears(1984)); // true
console.log(leapYears(1983)); // false
console.log(leapYears(1900)); // false
console.log(leapYears(2000)); // true

*/

/*

const leapYears = function(year) {

if (!(year % 100 == 0 && year % 400 == 0)) {
    return false;
} else if (((year % 4 == 0)) || (year % 100 == 0)) {
    return true;
}
};

*/




// !(year % 4 == 0) || (year % 100 == 0)

// return true;
// } else if (year % 100 == 0) {
// return false;
// } else return false;
// };


/*


function sumAll (x, y) {
    let sumList = 0;    
    if (x < 0 || y < 0 ||(typeof(x) !== 'number') || (typeof(y) !== 'number')){
        return 'ERROR';
    }
    if (x > y) {
        for (let i = y; i <= x; i++){
        sumList += i;        
        }
    } else for (let i = x; i <= y; i++){
        sumList += i;       
    }
    return sumList;
}

console.log(sumAll(6, 5));


*/

/*
function sum (x, y) {
    let sumList = 0;    
    if (y > x) {
    for (let i = x; i <= y; i++){
        sumList += i;        
    }
    return sumList;
}
}

console.log(sum(1, 10));



*/


/*


Implement a function that takes 2 integers and returns the sum of every number between(and including) them:

```javascript
sumAll(1, 4) // returns the sum of 1 + 2 + 3 + 4 which is 10
```


## Hints

Think about how you would do this on pen and paper and then how you might translate that process into code:
- make sure you pay attention to the function parameters
- create a variable to hold the final sum
- loop through the given numbers ([link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration))
- on each iteration add the number to the sum
- return the sum after finishing the loop


*/

/*

const removeFromArray = (array, ...removeArg) => {
    return array.filter(element => !removeArg.includes(element));
};

console.log(removeFromArray(['a', 'b', 2, 3, 4], 2, 'b'));

*/


/*

const reverseString = function(string) {
    const splitString = string.split('');        
    const reversedStringArray = splitString.reverse();       
    const reversedString = reversedStringArray.join("");
    return reversedString;    
};

const reverseString = function(string) {
    return string.split('').reverse().join();
};

*/

// Split string characters into array using slice

/*

const string = 'hello-world !!';

alert(string);

const splitString = string.split('');

alert(splitString);

const reversedStringArray = splitString.reverse();

alert(reversedStringArray);

const reversedString = reversedStringArray.join("");

alert(reversedString);


*/


// Pop letters of array into new array backwards (loop?)s


/*


const repeatString = function(string, num) {
    for (let i = 0; i < num; i++){
        let output = 
        return string
    }   
    
    
};

console.log(repeatString('hello', 5));

*/


// output = string + string + string + string + string + ... 


//

/*
// Check if prime

let n = prompt('Enter number');

for (i = 2; i < n; i++) {
	if (n % i == 0) {
		alert('Not a prime!');
		break;
	} alert(`${n} is a prime!`);
	break;
}

*/

/*

let i = 1;
let n = prompt('Enter number');

do {
	i++;
	if (n % i == 0) {
		alert('Not a prime!');
		break;		
	} console.log(i);
	
} while (i < n) 

*/

	// alert(`${n} is a prime!`)
	// break;

// 15 % 2 !== 0, so go to 3
// 15 % 3 == 0, alert 'not a prime'


/*

do {
	i++;
	if (n % i == 0) {
		alert('Not a prime!');
		break;		
	}
	
	console.log(i);
} while (i < n-1)
	
	
	// && (alert(`${n} is a prime!`) || true )) ;

*/





/*

for (i = 2; i <= n; i++) {
	if (n % i == 0)
	break;
	alert('not a prime');
} 

*/

/*
// Enter number 5
// If 5/2

// 1 2 3 4 5 6 7

// Is 6 a prime?

//6/2 = 3 X

*/


/*

let n = prompt('Enter number');

for (let i = 2; i <= n; i++) {
	if (*******)
	continue;
	console.log(i);
}

*/


// Can not be 






/*

let number = '';

while (number <= 100) {
  number = prompt('Enter number greater than 100');
  if (number <= 100) {
    alert('Incorrect');
  }
}
alert('Correct');

*/

  

/*

let number = '';


while (number <= 100) {
	number = prompt('Enter number greater than 100');
} 	alert('Correct');

*/

/*

let number = '';

do {
	number = prompt('Enter number > 100');
} 	while (number <= 100) {}
*/

/*

let number = 0;

while (number <= 100) {
	prompt('Enter a number greater than 100', '');
}


if (number <= 100) {
	alert('try again');
	prompt('Enter a number greater than 100', '');
}


*/

/*

while (number <= 100) {
	alert('try again');
	number;
}

*/








/*

let i = 0;

while (i < 3) {
		alert(`number is ${i} !`);
		i++;
}

*/



/*
for (let i = 2; i <= 10; i++) {
	if (i%2 !== 0)
		continue;
		console.log(i);
}
*/

/*

//Create loop that skips all odd numbers



for (let i = 0; i < 100; i++) {
		if (i%2 !== 0)
		continue;	
	console.log(i);

}

*/

/*


let sum = 0;

while (true) {

  let value = + prompt("Enter a number", '');

  if (!value) break; // (*)

  sum += value;

}
alert( 'Sum: ' + sum );

*/


/*

//forEach

const numbers = [5, 10, 14];

numbers.forEach((n, i) => {
	console.log(n);
	console.log(i);

});

*/

/*

// for...of

const listItems = document.querySelectorAll('li');

for (const li of listItems) {
console.log(li);

}

*/



/*

//for...in

const person = {
    name: 'Steve',
    age: '29',
    occupation: 'Founder',
    hair: {
    	color: 'brown',
    	length: 'medium'
    }
};

for (const prop in person) {
		console.log(person[prop]);
		
}

*/


/*

//do while

let i = 10;

do {
console.log(i)
i--;

} while (i < 10 && i > 0);


*/


/*

//while

let i = 0;

while (i < 10) {
    console.log(i);

    i++;
}

*/

/*

for(let i = 0; i < 10; i++) {
    if (i === 3) {
        continue;
    }
 
    if (i === 7)
        break;
    console.log(i);
}

*/


//this code





/*

function countdown(){
for (i=10; i>0; i--) {
    console.log(i);
    }
}

countdown()

*/





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