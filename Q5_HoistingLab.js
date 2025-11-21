"use strict";

console.log("=== Hoisting Lab: The Sequence Trap ===\n");

console.log("ORIGINAL CODE PREDICTIONS:");
console.log("--------------------------");
console.log("console.log(score); → undefined (var hoisting)");
console.log("announce(); → 'Game started' (function hoisting)");
console.log("var score = 50; → Declaration hoisted, assignment stays");
console.log("function announce() {...} → Entire function hoisted");
console.log("let status = 'ready'; → Not hoisted (TDZ)");
console.log("startGame(); → ReferenceError (status in TDZ)\n");

console.log("RUNNING ORIGINAL CODE:");
console.log("----------------------");

console.log(score);
announce();
var score = 50;
function announce() { 
    console.log("Game started"); 
}

try {
    let status = "ready";
    startGame();
    function startGame() {
        console.log(status);
    }
} catch (e) {
    console.log("Error caught (if any):", e.message);
}

console.log("\nFIXED CODE:");
console.log("-----------");

var score2 = 50;
function announce2() { 
    console.log("Game started"); 
}
let status2 = "ready";
function startGame2() {
    console.log(status2);
}

console.log(score2);
announce2();
startGame2();

console.log("\nARROW FUNCTION VERSION:");
console.log("-----------------------");

const score3 = 50;
const announce3 = () => { 
    console.log("Game started"); 
};
const status3 = "ready";
const startGame3 = () => {
    console.log(status3);
};

console.log(score3);
announce3();
startGame3();

console.log("\nHOISTING DIFFERENCES:");
console.log("- Regular functions are fully hoisted (can call before declaration)");
console.log("- Arrow functions are not hoisted (must declare before use)");
console.log("- var declarations are hoisted (undefined until assigned)");
console.log("- let/const are not hoisted (Temporal Dead Zone)");
