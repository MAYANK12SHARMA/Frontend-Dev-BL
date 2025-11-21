let expenses = [500, 300, 1200, 400, 250];
let total = 0;
for (let i = 0; i < expenses.length; i++) {
    total += expenses[i];
}
let average = total / expenses.length;
let totalWithTax = total + (total * 0.10);

console.log("Total Expenses: $" + total.toFixed(2));
console.log("Average Expense: $" + average.toFixed(2));
console.log("Total After 10% Tax: $" + totalWithTax.toFixed(2));