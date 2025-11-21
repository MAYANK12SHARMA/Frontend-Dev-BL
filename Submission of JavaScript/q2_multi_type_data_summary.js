let stringVar = "Hello";
let numberVar = 42;
let booleanVar = true;
let arrayVar = [1, 2, 3];
let objectVar = { name: "John", age: 25 };
let nullVar = null;
let undefinedVar = undefined;

let report = [
    { Label: "String Variable", Value: stringVar, Type: typeof stringVar },
    { Label: "Number Variable", Value: numberVar, Type: typeof numberVar },
    { Label: "Boolean Variable", Value: booleanVar, Type: typeof booleanVar },
    { Label: "Array Variable", Value: JSON.stringify(arrayVar), Type: Array.isArray(arrayVar) ? "array" : typeof arrayVar },
    { Label: "Object Variable", Value: JSON.stringify(objectVar), Type: typeof objectVar },
    { Label: "Null Variable", Value: nullVar, Type: nullVar === null ? "null" : typeof nullVar },
    { Label: "Undefined Variable", Value: undefinedVar, Type: typeof undefinedVar }
];

console.table(report);
