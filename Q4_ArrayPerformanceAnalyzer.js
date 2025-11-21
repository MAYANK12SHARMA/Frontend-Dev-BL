var scores = [];
for (var i = 0; i < 8; i++) {
    scores.push(Math.floor(Math.random() * 71) + 30);
}

var highest = Math.max(...scores);
var lowest = Math.min(...scores);
var total = scores.reduce(function(sum, score) {
    return sum + score;
}, 0);
var average = total / scores.length;

var passed = scores.filter(function(score) {
    return score >= 50;
}).length;

console.log("Student Performance Analysis");
console.log("============================");
console.log("Scores: " + scores.join(", "));
console.log("Highest Score: " + highest);
console.log("Lowest Score: " + lowest);
console.log("Average Score: " + average.toFixed(2));
console.log("Students Passed (>=50): " + passed + " out of " + scores.length);
