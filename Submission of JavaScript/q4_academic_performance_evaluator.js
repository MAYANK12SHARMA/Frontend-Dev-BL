let marks = [78, 85, 92, 68, 88];

let hasFailedSubject = false;
for (let i = 0; i < marks.length; i++) {
    if (marks[i] < 35) {
        hasFailedSubject = true;
        break;
    }
}

if (hasFailedSubject) {
    console.log("Detained");
} else {
    let total = 0;
    for (let i = 0; i < marks.length; i++) {
        total += marks[i];
    }
    
    let percentage = (total / (marks.length * 100)) * 100;
    
    if (percentage >= 85) {
        console.log("Promoted with Distinction");
    } else if (percentage >= 50 && percentage < 85) {
        console.log("Promoted");
    } else {
        console.log("Detained");
    }
} 