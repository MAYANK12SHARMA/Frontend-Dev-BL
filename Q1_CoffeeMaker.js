function boilWater() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.1) {
                console.log("Water boiled");
                resolve();
            } else {
                reject("Failed to boil water");
            }
        }, 1000);
    });
}

function brewCoffee() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.1) {
                console.log("Coffee brewed");
                resolve();
            } else {
                reject("Failed to brew coffee");
            }
        }, 1500);
    });
}

function pourIntoCup() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.1) {
                console.log("Coffee poured into cup");
                resolve();
            } else {
                reject("Failed to pour coffee");
            }
        }, 1000);
    });
}

boilWater()
    .then(() => brewCoffee())
    .then(() => pourIntoCup())
    .then(() => {
        console.log("Coffee ready for the team!");
    })
    .catch((error) => {
        console.log("Error:", error);
    });
