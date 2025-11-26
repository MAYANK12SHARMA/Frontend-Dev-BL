class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    work() {
        console.log(`${this.name} is working in ${this.department} department`);
    }
}

class Manager extends Employee {
    constructor(name, department) {
        super(name, department);
    }

    work() {
        console.log(`${this.name} is managing the ${this.department} department and leading the team`);
    }
}

const employee1 = new Employee("Arjun", "Development");
const employee2 = new Employee("Priya", "Marketing");
const manager1 = new Manager("Rahul", "Development");
const manager2 = new Manager("Sneha", "Sales");

employee1.work();
employee2.work();
manager1.work();
manager2.work();
