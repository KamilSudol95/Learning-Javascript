class Animal {
    constructor(name, sound) {
        this.name = name;
        this.voice = sound;
    }

    sound() {
        console.log(
            `This is a ${this.name} animal!\nIt sounds the ${this.voice} sound!`
        );
    }
}

let cat = new Animal("Cat", "Meow");
let dog = new Animal("Dog", "Bark");

cat.sound();
dog.sound();

Animal.prototype.move = function () {
    console.log(`${this.name} is moving`);
};

cat.move();
dog.move();

Animal.prototype.color = "black";

console.log(cat.color);
console.log(dog.color);

console.log(cat);
console.log(dog);