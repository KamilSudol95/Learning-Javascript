const maxValue = 100;
const prompt = require("prompt-sync")();
const randomNumber = Math.floor(Math.random() * maxValue) + 1;

let answerChecker = false;

while (!answerChecker) {
    const playerAnswer = Number(prompt(`Select number 1 to ${maxValue}: `));

    if (Number.isNaN(playerAnswer)) {
        console.log("Wrong input, please type a number.");
        continue;
    }

    if (playerAnswer < 1 || playerAnswer > maxValue) {
        console.log(`Number must be between 1 and ${maxValue}.`);
        continue;
    }

    if (playerAnswer === randomNumber) {
        console.log("You guessed it, congrats!");
        answerChecker = true;
        break;
    }

    console.log("Wrong guess, try again.");
    console.log(
        playerAnswer < randomNumber
            ? "Your number is too low"
            : "Your number is too high"
    );
}