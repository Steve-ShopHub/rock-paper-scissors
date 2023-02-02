const rockTitle = document.querySelector('#rock-title');

const paperTitle = document.querySelector('#paper-title');

const scissorsTitle = document.querySelector('#scissors-title');

const rockAvgTitle = document.querySelector('#rock-avg-title');

const paperAvgTitle = document.querySelector('#paper-avg-title');

const scissorsAvgTitle = document.querySelector('#scissors-avg-title');


const submitButton = document.querySelector('#loop-submit');
const formInput = document.querySelector('#form-input');











///////////////



///////////////





/////////////






function getComputerChoice () {
	let result = Math.floor(Math.random() * 3) + 1;
	return result;
};



submitButton.addEventListener('click', formSubmit);





let rockSum = 0;
let paperSum = 0;
let scissorsSum = 0;	
let rockAvg = 0;
let paperAvg = 0;
let scissorsAvg = 0;





function sum(){
	rockSum = 0;
	paperSum = 0;
	scissorsSum = 0;	
	rockAvg = 0;
	paperAvg = 0;
	scissorsAvg = 0;
	

	for (i = 0; i < userInput; i++) {
		let randomNumber = getComputerChoice();
		userInput = formSubmit();
		if (randomNumber == 1) {
			rockSum += 1;
		} 	else if (randomNumber == 2) {
			paperSum += 1;
		}		else if (randomNumber == 3) {
			scissorsSum += 1;
		} 	
	}
	rockAvg = Math.round(((rockSum/i) * 100)) + '%';
	paperAvg = Math.round(((paperSum/i) * 100)) + '%';
	scissorsAvg = Math.round(((scissorsSum/i) * 100)) + '%';
};



function getUserInput(){
	userInput = parseInt(formInput.value);
	console.log(userInput);
	console.log(typeof(userInput));
	return userInput;
}

function formSubmit(){
	function getUserInput(){};
	console.log(userInput);
	console.log(typeof(userInput));
	return userInput;
	

}










/*

function avg () {
	rockSum/i;
	rockSum/i;
	rockSum/i;
}

*/

// Add rock-avg etc function here


///////////////

/// tally count

const rockSumText = document.createElement('h1');
rockSumText.classList.add('rock-sum');
rockSumText.textContent =  rockSum;
rockSumText.style.color = 'green';
rockSumText.style.margin = '15px'
rockTitle.appendChild(rockSumText);

const paperSumText = document.createElement('h1');
paperSumText.classList.add('paper-sum');
paperSumText.textContent =  paperSum;
paperSumText.style.color = 'green';
paperSumText.style.margin = '15px'
paperTitle.appendChild(paperSumText);

const scissorsSumText = document.createElement('h1');
scissorsSumText.classList.add('scissors-sum');
scissorsSumText.textContent = scissorsSum;
scissorsSumText.style.color = 'green';
scissorsSumText.style.margin = '15px'
scissorsTitle.appendChild(scissorsSumText);

/// avg %



const rockAvgText = document.createElement('h2');
rockAvgText.classList.add('rock-avg');
rockAvgText.textContent =  rockAvg;
rockAvgText.style.color = 'green';
rockAvgText.style.margin = '15px'
rockAvgTitle.appendChild(rockAvgText);

const paperAvgText = document.createElement('h2');
paperAvgText.classList.add('paper-avg');
paperAvgText.textContent =  paperAvg;
paperAvgText.style.color = 'green';
paperAvgText.style.margin = '15px'
paperAvgTitle.appendChild(paperAvgText);

const scissorsAvgText = document.createElement('h2');
scissorsAvgText.classList.add('scissors-avg');
scissorsAvgText.textContent = scissorsAvg;
scissorsAvgText.style.color = 'green';
scissorsAvgText.style.margin = '15px'
scissorsAvgTitle.appendChild(scissorsAvgText);



//////////////////










/*

for (i = 0; i < 50; i++) {
    getComputerChoice();
    if (result == 1) {
        rockSum += 1;
}   if (result == 2) {
        paperSum += 1;
}   if (result == 3) {
    scissorsSum += 1;
}
};

*/
