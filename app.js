let car = {
    model: "Golf",
    make: "Volkswagen",
    year: 1999,
    color: "black",
};

let cars = [
    {
        model: "Golf",
        make: "Volkswagen",
        year: 1999,
        color: "black",
    },
    {
        model: "Picanto",
        make: "Kia",
        year: 2020,
        color: "red",
    },
    {
        model: "Peugeot",
        make: "208",
        year: 2021,
        color: "black",
    },
    {
        model: "Fiat",
        make: "Punto",
        year: 2020,
        color: "black",
    }
];

let arrKeys = Object.keys(car);
for(let i = 0; i < arrKeys.length; i++) {
    console.log(arrKeys[i] + ": " + car[arrKeys[i]]);
}

let arrEntries = Object.entries(car);
console.log(arrEntries);

for (const [key, value] of Object.entries(car)) {
    console.log(key, ":", value);
}

for (let i = 0; i < cars.length; i++) {
    if (cars[i].year >= 2020) {
        if (cars[i].color === "black") {
            console.log("I have found my new car:", cars[i]);
            break;
        }
    }
}

for (let car of cars){
    if(car.color !== "black"){
        continue;
    }
    if (car.year >= 2020) {
        console.log("we could get this one:", car);
    }
}