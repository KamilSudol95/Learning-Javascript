const prompt = require("prompt-sync")();
const options = ["rock", "paper", "scissors"];

let computerIndex = Math.floor(Math.random() * 3);
let computerChoice = options[computerIndex];
let playerChoice = prompt("Select rock, paper or scissors: ").toLowerCase();
let playerIndex;
let result;

switch (playerChoice) {
    case "rock":
        playerIndex = 0;
        break;
    case "paper":
        playerIndex = 1;
        break;
    case "scissors":
        playerIndex = 2;
        break;
    default:
        console.log("Invalid input! Please choose rock, paper, or scissors.");
}

if (playerIndex === computerIndex) {
    result = "Draw";
} else if (
    (playerIndex === 0 && computerIndex === 2) ||
    (playerIndex === 1 && computerIndex === 0) ||
    (playerIndex === 2 && computerIndex === 1)
) {
    result = "You win";
} else {
    result = "You lose";
}

console.log(`You chose: ${options[playerIndex]}`);
console.log(`Computer chose: ${computerChoice}`);
console.log(result);