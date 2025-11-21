var bonus = 5000;

function calculateSalary() {
    var salary = 40000;
    var isPermanent = true;
    
    var totalSalary = salary;
    if (isPermanent) {
        totalSalary += bonus;
    }
    
    console.log("Total Salary: " + totalSalary);
}

calculateSalary();

console.log("\nChanging isPermanent to false:");
function calculateSalary2() {
    var salary = 40000;
    var isPermanent = false;
    
    var totalSalary = salary;
    if (isPermanent) {
        totalSalary += bonus;
    }
    
    console.log("Total Salary: " + totalSalary);
}

calculateSalary2();
