function sleep(millis) {
    return new Promise(resolve => setTimeout(resolve, millis));
}

async function example() {
    let t = Date.now();
    await sleep(100);
    console.log(Date.now() - t); // This should print 100 (or very close to it)
}

example();
