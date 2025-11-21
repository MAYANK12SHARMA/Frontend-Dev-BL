"use strict";

console.log("=== Debugging Mystery ===\n");

console.log("ORIGINAL CODE (COMMENTED OUT - CAUSES ERROR):");
console.log("----------------------------------------------");
console.log('function showMessage() {');
console.log('    greeting = "Welcome";');
console.log('    console.log(greeting);');
console.log('}');
console.log('showMessage();');
console.log("");

console.log("ERROR EXPLANATION:");
console.log("In strict mode, assigning to an undeclared variable throws a ReferenceError.");
console.log("The variable 'greeting' was never declared with var, let, or const.");
console.log("Strict mode prevents implicit global variable creation.\n");

console.log("FIXED CODE:");
console.log("-----------");

function showMessage() {
    const greeting = "Welcome";
    console.log(greeting);
}

showMessage();

console.log("\nFIX EXPLANATION:");
console.log("Declared 'greeting' with 'const' before assignment.");
console.log("This makes it a proper local variable within the function scope.");
console.log("Strict mode now allows the code to execute without errors.");
