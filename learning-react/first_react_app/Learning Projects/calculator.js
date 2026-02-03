const prompt = require("prompt-sync")();

let firstVariable = Number(prompt("Choose a number"));
let secondVariable = Number(prompt("Choose a number"));
let operator = prompt("Choose an operator +, -, * or /");

function calculate(firstVariable, secondVariable, operator) {
    if (operator === "+") {
        return console.log(firstVariable + firstVariable);
    }else if (operator === "-") {
        return console.log(firstVariable - firstVariable);
    }else if (operator === "*") {
        return console.log(firstVariable * firstVariable);
    }else if (operator === "/") {
        return console.log(firstVariable / firstVariable);
    }else {
        console.log("Incorrect operator: ", operator);
    }
}

calculate(firstVariable, secondVariable, operator);