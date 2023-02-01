const rockTitle = document.querySelector('#rock-title');

const paperTitle = document.querySelector('#paper-title');

const scissorsTitle = document.querySelector('#scissors-title');

///////////////


let rockSum = 5;
let paperSum = 1;
let scissorsSum = 10;


///////////////


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






/*

function getComputerChoice () {
    let result = Math.floor(Math.random() * 3) + 1;
    return result;
};

getComputerChoice();

let result = getComputerChoice();

console.log(result)



for (i = 0; i < 50; i++) {
    if (result == 1) {

    }
};



/*
let sumOne = 0;
    let sumTwo = 0;
    let sumThree = 0;
    if (i = )    
    sumOne += 
    console.log(getComputerChoice());

    */
