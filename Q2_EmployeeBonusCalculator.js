"use strict";

const employees = [
    { name: "Amit", salary: "45000", years: "5" },
    { name: "Sara", salary: "38000", years: "2" },
    { name: "Kiran", salary: "52000", years: "7" }
];

console.log("=== Employee Bonus Calculator ===\n");

employees.forEach((employee, index) => {
    try {
        if (!employee.name || !employee.salary || !employee.years) {
            throw new Error("Missing required property");
        }
        
        const salary = Number(employee.salary);
        const years = Number(employee.years);
        
        if (isNaN(salary) || isNaN(years)) {
            throw new Error("Invalid number conversion");
        }
        
        const bonus = years > 3 ? salary * 0.1 : salary * 0.05;
        const totalCompensation = salary + bonus;
        
        console.log(`Employee #${index + 1}`);
        console.log(`  Name: ${employee.name}`);
        console.log(`  Salary: $${salary.toFixed(2)}`);
        console.log(`  Years of Service: ${years}`);
        console.log(`  Bonus Rate: ${years > 3 ? '10%' : '5%'}`);
        console.log(`  Bonus Amount: $${bonus.toFixed(2)}`);
        console.log(`  Total Compensation: $${totalCompensation.toFixed(2)}`);
        console.log("");
        
    } catch (error) {
        console.log(`Error processing employee #${index + 1}: ${error.message}\n`);
    }
});
