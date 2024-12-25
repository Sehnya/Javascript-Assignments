document.addEventListener("DOMContentLoaded", () => {
    const roundDisplay = document.getElementById('round');
    const buttons = document.querySelectorAll("#RPScontainer button");
    const choices = Array.from(buttons).map(button => button.id);
    const userChoiceDisplay = document.getElementById('user-choice');
    const computerChoiceDisplay = document.getElementById('computer-choice');
    const winnerDisplay = document.getElementById('winner');
    const scoreDisplay = document.getElementById('score');
    const gameWinnerDisplay = document.getElementById('game');  
    
    let round = 1
    let humanScore = 0
    let computerScore = 0;
 
    function getComputerChoice() {
        return choices[Math.floor(Math.random() * buttons.length)];
    }

    function determineW(compChoice,userChoice) {
        if (compChoice === userChoice) {
        return "It's a TIE!! No Points Awarded.";
    } else if (
        compChoice === 'paper' && userChoice === 'rock' ||
        compChoice === 'scissors' && userChoice === 'paper' ||
        compChoice === 'rock' && userChoice === 'scissors'
    ) {
        computerScore++;
        return `The winner is computer with ${compChoice}`;
    } else {
        humanScore++;
        return `The winner is the user with ${userChoice}`;
        };
    }
      
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            
        if (round <= 6) {
            const compChoice = getComputerChoice();
            const userChoice = button.id
            const winner = determineW(compChoice,userChoice);
          
            roundDisplay.textContent = `Round: ${round} out of 5`
            userChoiceDisplay.textContent = `User choice: ${userChoice}`;
            computerChoiceDisplay.textContent = `Computer choice: ${compChoice}`;
            scoreDisplay.textContent = `User: ${humanScore}\nComputer:${computerScore}\n`;
            round++;
            winnerDisplay.textContent = winner;

        if (humanScore > computerScore && round === 6) {
            gameWinnerDisplay.textContent = `You won the game! Congrats!`;
            buttons.forEach(button => button.disabled = true);
            document.getElementById('try-again').removeAttribute('hidden');
            document.getElementById('try-again').addEventListener('click', () => {
                location.reload(true)})
        } else if (computerScore > humanScore && round === 6) {
            gameWinnerDisplay.textContent = 'WOMP! WOMP! The computer won the game! Better luck next time!';
            buttons.forEach(button => button.disabled = true);
            document.getElementById('try-again').removeAttribute('hidden');
            document.getElementById('try-again').addEventListener('click', () => {
                location.reload(true)})
        } else if (humanScore === computerScore && round === 6) {
            gameWinnerDisplay.textContent = `It's a tie! No one wins!`;
            buttons.forEach(button => button.disabled = true);
            document.getElementById('try-again').removeAttribute('hidden');
            document.getElementById('try-again').addEventListener('click', () => {
                location.reload(true)})
        };
        }
    });

        
    });
});