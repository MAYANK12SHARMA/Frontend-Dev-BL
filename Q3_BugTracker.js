function getBugs() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const shouldFail = Math.random() < 0.3;
            if (shouldFail) {
                reject("API failed to fetch bugs");
            } else {
                resolve(["UI glitch", "API timeout", "Login failure"]);
            }
        }, 1000);
    });
}

getBugs()
    .then((bugs) => {
        console.table(bugs);
    })
    .catch((error) => {
        console.log("Error:", error);
    });
