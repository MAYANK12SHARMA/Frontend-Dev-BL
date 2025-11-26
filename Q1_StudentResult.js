class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }

    calculateAverage() {
        const total = this.marks.reduce((sum, mark) => sum + mark, 0);
        return total / this.marks.length;
    }

    getGrade() {
        const average = this.calculateAverage();
        if (average >= 90) return 'A';
        if (average >= 75) return 'B';
        if (average >= 50) return 'C';
        return 'F';
    }
}

const student1 = new Student("Arjun", [85, 90, 88, 92, 87]);
const student2 = new Student("Priya", [78, 82, 75, 80, 76]);
const student3 = new Student("Rahul", [45, 50, 42, 48, 46]);

console.log(`${student1.name} - Average: ${student1.calculateAverage().toFixed(2)}, Grade: ${student1.getGrade()}`);
console.log(`${student2.name} - Average: ${student2.calculateAverage().toFixed(2)}, Grade: ${student2.getGrade()}`);
console.log(`${student3.name} - Average: ${student3.calculateAverage().toFixed(2)}, Grade: ${student3.getGrade()}`);
