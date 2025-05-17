function getComputerChoice() {
    let number = Math.floor(Math.random() * 3);
    if (number === 0 ) {
        return "Rock";
    } else if (number === 1) {
        return "Paper";
    } else {
        return "Scissors";}
}

function getHumanChoice() {
    let choice = prompt("Rock, paper or scissors?").toLowerCase();
    if (choice === "rock") {
        return "Rock";
    } else if (choice === "paper") {
        return "Paper";
    } else if (choice === "scissors") {
        return "Scissors";
    }
}


function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            return "Draw";
        } else if (
            (humanChoice === "Rock" && computerChoice === "Scissors") ||
            (humanChoice === "Paper" && computerChoice === "Rock") ||
            (humanChoice === "Scissors" && computerChoice === "Paper")
            ) {
                humanScore ++;
                return "You win! " + humanChoice + " beats " + computerChoice;
            } else {
                computerScore ++;
                return "You lose! " + computerChoice + " beats " + humanChoice;
            }
    }
        console.log("Welcome");
        for (let i= 0; i < 5; i++) {
            const humanSelection = getHumanChoice();
            const computerSelection = getComputerChoice();

            console.log(humanSelection);
            console.log(computerSelection);

            console.log(playRound(humanSelection, computerSelection));
            console.log(humanScore, computerScore);
        }
        console.log("Game Over");
        if(humanScore > computerScore) {
            console.log ("You win");
        } else if((humanScore < computerScore)) {
            console.log ("You lose");
        } else  {
            console.log("We have a tie");
        }
}

playGame();