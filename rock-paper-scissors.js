
// let round = 1;

document.addEventListener("DOMContentLoaded", () => {
    globalThis.humanScore = 0;
    globalThis.computerScore = 0;
    const roundDisplay = document.getElementById('round');
    const buttons = document.querySelectorAll("#RPScontainer button");
    const choices = Array.from(buttons).map(button => button.id);
    const userChoiceDisplay = document.getElementById('user-choice');
    const computerChoiceDisplay = document.getElementById('computer-choice');
    const winnerDisplay = document.getElementById('winner');
    const scoreDisplay = document.getElementById('score');

    function getComputerChoice() {
        return choices[Math.floor(Math.random() * buttons.length)];
    }
    function determineW(compChoice,userChoice) {
        if (compChoice === userChoice) {
            return ("It's a TIE!! No Points Awarded.")
        } else if (
            (compChoice === 'paper' && userChoice == 'rock') ||
            (compChoice === 'scissors' && userChoice === 'paper') ||
            (compChoice === 'rock' && userChoice === 'scissors')) {
                computerScore++;
            return (`The winner is computer with ${compChoice}`);
            
        } else {
                humanScore++;
            return (`The winner is the user with ${userChoice}`);
        };
    };
    
    buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const compChoice = getComputerChoice();
        const userChoice = button.id
        const winner = determineW(userChoice,compChoice);
        let round = 0; 
        round++;
        
        roundDisplay.textContent = `Round: ${round}`
        userChoiceDisplay.textContent = `User choice: ${userChoice}`;
        computerChoiceDisplay.textContent = `Computer choice: ${compChoice}`;
        scoreDisplay.textContent = `User: ${humanScore}\nComputer:${computerScore}\n`;
        winnerDisplay.textContent = winner
         });
     });
});


//     let max = 3;
//     let compChoice = buttons[Math.floor(Math.random(max) * choices.length)];
//     return compInput[compChoice]
// }; 
// const Compchoice = compInput;
// console.log(Compchoice);

    // button.addEventListener("click", () => {
         
    //     console.log();
    // });      
        // let numVal = options[input]; 
        // console.log(`You chose: ${[input]}`);

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