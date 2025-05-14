function playRound(humanChoice, computerChoice) {

function getComputerChoice() {
    if (number === 0 ) {
        return "rock";
    } else if (number === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

let number = Math.floor(Math.random() * 3);

console.log(getComputerChoice());

function getHumanChoice() {
    return pick;
}

let pick = prompt("Rock, paper or scissors?");

console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

}

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();