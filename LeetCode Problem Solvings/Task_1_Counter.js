let arr = []
var createCounter = function (n) {
    return function () {
        arr = [...arr, n]
        return n++;
    };
};

const counter = createCounter(10)
counter() // 10
counter() // 11
counter() // 12
console.log(arr)