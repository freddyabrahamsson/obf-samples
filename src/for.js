// For loop.

function countdown(x) {
    for (i = x; i > 0; i--) {
        process.stdout.write(x + "...");
    }
    console.log("LIFTOFF!")
}

countdown(10);