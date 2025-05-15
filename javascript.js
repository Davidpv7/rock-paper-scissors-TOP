// function playRound(humanChoice, computerChoice) {

function getComputerChoice() {

    let number = Math.floor(Math.random() * 3);
    if (number === 0 ) {
        return "rock";
    } else if (number === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

console.log(getComputerChoice());


function getHumanChoice() {
    let choice = prompt("Rock, paper or scissors?");

    if (choice === "rock") {
        return "Rock";
    } else if (choice === "paper") {
        return "Paper";
    } else if (choice === "scissors") {
        return "Scissors"}
}

console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

//  }

// let humanSelection = getHumanChoice();
// let computerSelection = getComputerChoice();