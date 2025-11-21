var x = 16.75;

var rounded = Math.round(x);
var squareRoot = Math.sqrt(x);
var power = Math.pow(x, 3);
var randomNum = Math.floor(Math.random() * 41) + 10;

var summary = `
Math Dashboard for x = ${x}
============================
Rounded Value: ${rounded}
Square Root: ${squareRoot.toFixed(2)}
Power (x^3): ${power.toFixed(2)}
Random Number (10-50): ${randomNum}
`;

console.log(summary);
