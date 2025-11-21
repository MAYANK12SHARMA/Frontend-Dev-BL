"use strict";

const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

const validTransactions = [];
const invalidTransactions = [];

console.log("=== Transaction Validator ===\n");

for (let i = 0; i < transactions.length; i++) {
    const transaction = transactions[i];
    
    try {
        if (transaction === null) {
            throw new Error("Null entry detected");
        }
        
        if (!transaction.hasOwnProperty("id")) {
            throw new Error("Missing id property");
        }
        
        if (!transaction.hasOwnProperty("amount")) {
            throw new Error("Missing amount property");
        }
        
        if (transaction.amount < 0) {
            throw new Error("Negative amount detected");
        }
        
        validTransactions.push(transaction);
        console.log(`✓ Transaction #${i + 1} - Valid`);
        console.log(`  ID: ${transaction.id}, Amount: $${transaction.amount}\n`);
        
    } catch (error) {
        invalidTransactions.push({ index: i, transaction, error: error.message });
        console.log(`✗ Transaction #${i + 1} - Invalid`);
        console.log(`  Error: ${error.message}`);
        console.log(`  Data: ${JSON.stringify(transaction)}\n`);
    }
}

console.log("=== Final Report ===");
console.log(`\nSuccessful Transactions: ${validTransactions.length}`);
console.log(`Failed Transactions: ${invalidTransactions.length}`);

console.log("\nError Categories:");
const errorTypes = {};
invalidTransactions.forEach(item => {
    errorTypes[item.error] = (errorTypes[item.error] || 0) + 1;
});

for (const errorType in errorTypes) {
    console.log(`  - ${errorType}: ${errorTypes[errorType]}`);
}
