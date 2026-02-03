class Menu {
    #item1 = 5;
    #item2 = 10
    constructor(amount1, amount2) {
        this.amount1 = amount1;
        this.amount2 = amount2;
    }
    calculateTotal() {
        return (this.amount1 * this.#item1) + (this.amount2 * this.#item2);
    }
    get total() {
        return this.calculateTotal();
    }
}

const amount1 = new Menu(2,0);
const amount2 = new Menu(1,3);
const amount3 = new Menu(3,2);
console.log(amount1.total);
console.log(amount2.total);
console.log(amount3.total);
