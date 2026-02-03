const prompt = require("prompt-sync")();
let targetNumber = Math.floor(Math.random() * 10) + 1;
let userNumber = Number(prompt("Enter a number: "));

if (userNumber > targetNumber) {
    console.log("Your number is greater than the target number!");
} else if (userNumber < targetNumber) {
    console.log("Your number is less than the target number!");
} else if (userNumber === targetNumber) {
    console.log("Congratulations! You guessed the number!");
} else {
    console.log("Invalid input. Please enter a valid number.");
}
