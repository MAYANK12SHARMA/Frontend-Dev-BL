console.log("=== CALLBACK HELL VERSION ===");

function design(callback) {
    setTimeout(() => {
        console.log("Design completed");
        callback();
    }, 1000);
}

function build(callback) {
    setTimeout(() => {
        console.log("Build completed");
        callback();
    }, 1000);
}

function test(callback) {
    setTimeout(() => {
        console.log("Test completed");
        callback();
    }, 1000);
}

function deploy(callback) {
    setTimeout(() => {
        console.log("Deploy completed");
        callback();
    }, 1000);
}

function celebrate() {
    setTimeout(() => {
        console.log("Celebrate completed");
    }, 1000);
}

design(() => {
    build(() => {
        test(() => {
            deploy(() => {
                celebrate();
            });
        });
    });
});

console.log("\n=== ASYNC/AWAIT VERSION ===");

function designAsync() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Design completed");
            resolve();
        }, 1000);
    });
}

function buildAsync() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Build completed");
            resolve();
        }, 1000);
    });
}

function testAsync() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Test completed");
            resolve();
        }, 1000);
    });
}

function deployAsync() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Deploy completed");
            resolve();
        }, 1000);
    });
}

function celebrateAsync() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Celebrate completed");
            resolve();
        }, 1000);
    });
}

async function runPipeline() {
    await designAsync();
    await buildAsync();
    await testAsync();
    await deployAsync();
    await celebrateAsync();
}

setTimeout(() => {
    runPipeline();
}, 6000);
