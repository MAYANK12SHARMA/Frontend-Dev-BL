function serverA() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.2) {
                resolve("Server A");
            } else {
                reject("Server A failed");
            }
        }, 2000);
    });
}

function serverB() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.2) {
                resolve("Server B");
            } else {
                reject("Server B failed");
            }
        }, 3000);
    });
}

Promise.all([serverA(), serverB()])
    .then(() => {
        console.log("Deployment completed for all servers");
    })
    .catch((error) => {
        console.log("Error in Promise.all():", error);
    });

Promise.race([serverA(), serverB()])
    .then((fastest) => {
        console.log("Fastest response:", fastest);
    })
    .catch((error) => {
        console.log("Error in Promise.race():", error);
    });
