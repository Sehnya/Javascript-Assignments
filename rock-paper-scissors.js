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
};
    return choices[number]
};

globalThis.humanScore = 0;
globalThis.computerScore = 0;
let round = 1;

while (round <= 5) {
    console.log(`Round ${round}:`);
    const result = getComputerChoice(max);
    console.log(`The computer chose: ${RpOrS(result)} (${result})`);


    function getHumanChoice() {
        let input = prompt("Enter rock, paper, or scissors:").toLowerCase().slice("");
        let numVal = options[input];
        console.log(`You chose: ${[input]} (${numVal})`);
        return numVal;
    };
    
    let numVal = getHumanChoice();

    function determineW(result,numVal) {
        if (result === numVal) {
            console.log("It's a TIE!! No Points Awarded.")
        } else if ((result === 1 && numVal == 0) || (result === 2 && numVal === 1) || (result === 0 && numVal === 2)) {
            console.log(`The winner is computer with ${RpOrS(result)}`);
            computerScore++;
        } else {
            (console.log(`The winner is the user with ${RpOrS(numVal)}`));
            humanScore++;
        }
        console.log(`SCORE:\n You: ${this.humanScore},\n Computer: ${this.computerScore}`)
    };
    
    determineW(result,numVal);

    if (humanScore === 3) {
        console.log(`You won the game! Congrats!`);
        break;
    } else if (computerScore === 3) {
        console.log(`WOMP WOMP! The computer won the game! Better luck next time!`);
        break;
    }

    round++;

}

    if (round > 5){
        if (humanScore > computerScore) {
            console.log(`You won the game! Congrats!`);
        } else if (humanScore < computerScore) {
            console.log(`WOMP WOMP! the computer won the game! Better luck next time!`);
        } else {
            console.log(`It's a tie game!`)
        }
    } 

