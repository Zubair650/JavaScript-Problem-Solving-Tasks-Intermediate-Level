function createCounter(init) {
    let i = 0;
    const increment = () => init + ++i;
    const decrement = () => init + --i;
    const reset = () => {
        i = 0;
        return init;
    }
    return {
        increment,
        decrement,
        reset
    }
}

const counter = createCounter(5);
console.log(counter.increment()); // 6
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4
