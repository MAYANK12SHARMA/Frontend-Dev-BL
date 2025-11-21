class Employee {
  constructor(id, name, department, salary) {
    this.id = id;
    this.name = name;
    this.department = department;
    this.salary = salary;
  }

  getAnnualSalary() {
    return this.salary * 12;
  }

  applyBonus(percent) {
    this.salary = this.salary + (this.salary * percent / 100);
  }
}

const employees = [
  new Employee(1, "John Doe", "Engineering", 5000),
  new Employee(2, "Jane Smith", "Marketing", 4500),
  new Employee(3, "Bob Johnson", "Sales", 4000),
  new Employee(4, "Alice Williams", "HR", 3500),
  new Employee(5, "Charlie Brown", "Finance", 5500)
];

console.log("Annual Salaries:");
employees.forEach(employee => {
  console.log(`${employee.name} (${employee.department}): $${employee.getAnnualSalary()}`);
});

employees[0].applyBonus(10);
console.log(`\n${employees[0].name} after 10% bonus: $${employees[0].salary} per month`);

const totalAnnualPayout = employees.reduce((total, employee) => {
  return total + employee.getAnnualSalary();
}, 0);

console.log(`\nTotal Annual Payout: $${totalAnnualPayout}`);
