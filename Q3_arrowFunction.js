const user = {
    name: "Alice",
    showName: () => {
        console.log(this.name);
    }
};

console.log("Arrow function:");
user.showName();

const userFixed = {
    name: "Alice",
    showName: function() {
        console.log(this.name);
    }
};

console.log("Normal function:");
userFixed.showName();
