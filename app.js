let productCatalogue = [];

let laptop = {
    name : 'lenovo',
    model : 'omega',
    cost : 3799,
    quantity : 101
};

let smartphone = {
    name : 'samsung',
    model : 's23',
    cost : 2799,
    quantity : 50
};

let gpu = {
    name : 'nvidia',
    model : '5080',
    cost : 4799,
    quantity : 10
};


productCatalogue.push(laptop, smartphone, gpu);
console.log(productCatalogue);

let quantity = productCatalogue[2].quantity;
console.log(quantity);
