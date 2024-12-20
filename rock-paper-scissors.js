let max = 3;
let rock = 0;
let paper = 1;
let scissors = 2;

var options = {
    'rock': rock,
    'paper': paper,
    'scissors': scissors,
};

function getComputerChoice(max) {
    return Math.floor(Math.random() * max);
};

let RpOrS = (number) => {
    let choices = {
    0 : 'rock',
    1 : 'paper',
    2 : 'scissors'
}
    return choices[number]
};

const result = getComputerChoice(max);
console.log(`The computer chose: ${RpOrS(result)} (Choice #${result})`);


function displayOptions() { 
    console.log("Select an Option");
    for (let key in options) {
        console.log(`${key}: ${options[key]}`);
    }
};

function retrieveHumanChoice() {
    displayOptions();
    let input = prompt("Enter rock, paper, or scissors:");
    return options[input];
};

let userInput = retrieveHumanChoice(); 
console.log(`"You chose:"`, retrieveHumanChoice());

