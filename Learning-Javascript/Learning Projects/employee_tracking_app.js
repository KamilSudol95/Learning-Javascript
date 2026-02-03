let arr = [];

class Employee {
    constructor(firstName, lastName, yearsWorked) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.yearsWorked = yearsWorked;
    }
}

let firstEmployee = new Employee("John", "Pork", 7)
let secondEmployee = new Employee("Anna", "Beef", 3)

arr.push(firstEmployee, secondEmployee);

Employee.prototype.grabDetails = function() {
    return console.log(this.firstName + " " + this.lastName + " worked " + this.yearsWorked + " years in this establishment");
}

for (let employee of arr) {
    employee.grabDetails();
}

