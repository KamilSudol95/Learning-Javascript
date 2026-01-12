const prompt = require("prompt-sync")();
let randomNumber = Math.floor(Math.random() * 6);
let userQuestion = prompt("What is your question? ");
let answer = "";

switch(randomNumber) {
    case 0:
        answer = "Yes, definitely!";
        break;
    case 1:
        answer = "It is certain.";
        break;
    case 2:
        answer = "Reply hazy, try again.";
        break;
    case 3:
        answer = "Ask again later.";
        break;
    case 4:
        answer = "Don't count on it.";
        break;
    case 5:
        answer = "My sources say no.";
        break;
}

console.log("\nYou asked: " + userQuestion);
console.log("Magic 8-Ball says: " + answer);