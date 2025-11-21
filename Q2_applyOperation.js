function applyOperation(numbers, operation) {
    return numbers.map(operation);
}

const double = (num) => num * 2;
const square = (num) => num * num;

console.log("Doubled:", applyOperation([1, 2, 3, 4], double));
console.log("Squared:", applyOperation([1, 2, 3, 4], square));
