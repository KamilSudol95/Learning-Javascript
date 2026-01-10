let valueInMiles = 1500;
let valueinKilometers = valueInMiles * 1.60934;

console.log("The distance of " + valueinKilometers + " kms is equal to " + valueInMiles + " miles");

let height = 72;
let weight = 172;

let cmHeight = 72 * 2.54;
let kgWeight = 172 / 2.2046;

console.log(cmHeight, kgWeight);


let BMI = kgWeight / ((cmHeight / 100) ** 2);

console.log(BMI);