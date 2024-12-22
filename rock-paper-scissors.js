let max = 3;
let rock = 0;
let paper = 1;
let scissors = 2;



// const container = document.querySelector("#RPScontainer");
// var options = {
//    container(querySelector('#rock')): rock,
//     document.querySelector('#paper') paper,
//     document.querySelector('#scissors')  scissors': scissors,

// };

// function getComputerChoice(max) {
//     return Math.floor(Math.random() * max);
// };

// let RpOrS = (number) => {
//     let choices = {
//     0 : 'rock',
//     1 : 'paper',
//     2 : 'scissors'
// };
//     return choices[number]
// };
// const result = getComputerChoice(max);
// console.log(`The computer chose: ${RpOrS(result)} (${result})`);

// function getHumanChoice() {
//     let input = 
//     let numVal = options[input];
//     console.log(`You chose: ${[input]} (${numVal})`);
//     return numVal;
// };

// let numVal = getHumanChoice();


globalThis.humanScore = 0;
globalThis.computerScore = 0;
let round = 1;

const buttons = document.querySelectorAll("#RPScontainer");
buttons.forEach((button) => {
    console.log(button.id)
    // button.addEventListener("click", () => {
         
    //     console.log();
    // });      
        // let numVal = options[input]; 
        // console.log(`You chose: ${[input]}`);
});

        // not returning numval
    //  buttonConversion => {
    //     let (button.addEventListener("click")) = options;
    //     RpOrS(options);
    //     return buttonConversion[RpOrS(options)]
    //  };
    // if (buttonConversion() === getComputerChoice()) {
    //     determineW(result,numVal);
    //     if (result === numVal) {
    //         console.log("It's a TIE!! No Points Awarded.");
    //     } else if ((result === 1 && numVal == 0) || (result === 2 && numVal === 1) || (result === 0 && numVal === 2)) {
    //         console.log(`The winner is computer with ${RpOrS(result)}`);
    //         computerScore++;
    //     } else {
    //         (console.log(`The winner is the user with ${RpOrS(numVal)}`));
    //         humanScore++;
    //     }
    //     console.log(`SCORE:\n You: ${this.humanScore},\n Computer: ${this.computerScore}`);
//  };
//