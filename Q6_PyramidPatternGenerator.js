"use strict";

console.log("=== Pyramid Pattern Generator ===\n");

console.log("PATTERN WITH LET:");
console.log("-----------------");

const limit = 5;

for (let i = 1; i <= limit; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "* ";
    }
    console.log(row);
}

console.log("\nPATTERN WITH VAR:");
console.log("-----------------");

for (var i = 1; i <= limit; i++) {
    var row = "";
    for (var j = 1; j <= i; j++) {
        row += "* ";
    }
    console.log(row);
}

console.log("\nOBSERVATION:");
console.log("Both let and var produce the same output in this case.");
console.log("Difference: var has function scope, let has block scope.");
console.log("After loops: var variables (i, j, row) are still accessible.");
console.log("After loops: let variables are not accessible outside their block.");

console.log(`\nvar i after loop: ${i}`);
console.log(`var j after loop: ${j}`);
console.log(`var row after loop: "${row}"`);

try {
    console.log("\nTrying to access let variables (will fail)...");
} catch (e) {
    console.log("let variables are not accessible here");
}
