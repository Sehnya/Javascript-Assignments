document.addEventListener("DOMContentLoaded", () => {
    const roundDisplay = document.getElementById('round');
    const buttons = document.querySelectorAll("#RPScontainer button");
    const choices = Array.from(buttons).map(button => button.id);
    const userChoiceDisplay = document.getElementById('user-choice');
    const computerChoiceDisplay = document.getElementById('computer-choice');
    const winnerDisplay = document.getElementById('winner');
    const scoreDisplay = document.getElementById('score');
    const gameWinnerDisplay = document.getElementById('game');  
    
    let round = 0
    let humanScore = 0
    let computerScore = 0;
 
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

            if (round < 5) {
                const compChoice = getComputerChoice();
                const userChoice = button.id
                const winner = determineW(userChoice,compChoice);
          
                round++;
                roundDisplay.textContent = `Round: ${round} out of 5`
                userChoiceDisplay.textContent = `User choice: ${userChoice}`;
                computerChoiceDisplay.textContent = `Computer choice: ${compChoice}`;
                scoreDisplay.textContent = `User: ${humanScore}\nComputer:${computerScore}\n`;
                winnerDisplay.textContent = winner;
             
                if (round === 5) {

                    if (humanScore > computerScore) {

                    gameWinnerDisplay.textContent = `You won the game! Congrats!`;
                    buttons.forEach(button => button.disabled = true);

                    } else if (computerScore > humanScore) {

                    gameWinnerDisplay.textContent = 'WOMP! WOMP! The computer won the game! Better luck next time!';
                    buttons.forEach(button => button.disabled = true);

                    } else {

                    gameWinnerDisplay.textContent = `Neither player reached a score of 3. It's a DRAW!`;

                    }
                    buttons.forEach(button => button.disabled = true);

                    document.getElementById('try-again').removeAttribute('hidden')
                    document.getElementById('try-again').addEventListener ('click', () => {
                        location.reload(true);
                    });
                }
            }
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
