const prompt = require("prompt-sync")();
let prize = Number(prompt("Select a number between 0 and 10: "));
let message = "My Selection: ";
let prizeMessage;

switch(prize) {
    case 0:
    case 1:
        prizeMessage = "You won a chocolate bar!";
        break;
    case 2:
    case 3:
        prizeMessage = "You won a small toy!";
        break;
    case 4:
        prizeMessage = "You won a gift card!";
        break;
    case 5:
    case 6:
        prizeMessage = "You won a cool sticker pack!";
        break;
    case 7:
        prizeMessage = "You won a mystery box!";
        break;
    case 8:
    case 9:
        prizeMessage = "You won a coupon for free ice cream!";
        break;
    case 10:
        prizeMessage = "Jackpot! You won a gaming console!";
        break;
    default:
        prizeMessage = "Invalid selection! Please choose a number between 0 and 10.";
}

console.log(message + prize + "\n" + prizeMessage);