"use strict";

const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

const validNumbers = [];
const invalidNumbers = [];

console.log("=== Dynamic Data Parser ===\n");

apiData.forEach((value, index) => {
    console.log(`\nProcessing index ${index}: "${value}"`);
    
    const asNumber = Number(value);
    const asBoolean = Boolean(value);
    const asString = String(value);
    
    console.log(`  Number: ${asNumber}`);
    console.log(`  Boolean: ${asBoolean}`);
    console.log(`  String: "${asString}"`);
    
    if (isNaN(asNumber) || value === " " || (typeof value === "string" && value.trim() !== "" && isNaN(Number(value.trim())))) {
        invalidNumbers.push(value);
        console.log(`  Status: INVALID`);
    } else if (value !== null && value !== undefined && value !== "") {
        validNumbers.push(asNumber);
        console.log(`  Status: VALID`);
    } else {
        invalidNumbers.push(value);
        console.log(`  Status: INVALID`);
    }
});

console.log("\n=== Final Report ===");
console.log(`\nValid Numeric Data (${validNumbers.length} items):`);
for (let i = 0; i < validNumbers.length; i++) {
    console.log(`  [${i}] ${validNumbers[i]}`);
}

console.log(`\nInvalid Data (${invalidNumbers.length} items):`);
for (let i = 0; i < invalidNumbers.length; i++) {
    console.log(`  [${i}] "${invalidNumbers[i]}"`);
}
