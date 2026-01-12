const prompt = require("prompt-sync")();

let age = Number(prompt("What is your age?"));

if (age >= 21) {
    console.log("Hello traveler, access to alcohol section granted");
}
else if (age >= 19) {
    console.log("Hello traveler, access to alcohol denied");
}
else {
    console.log("Please leave");
}
