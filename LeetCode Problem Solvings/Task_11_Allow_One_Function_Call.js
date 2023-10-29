/* Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.

1. The first time the returned function is called, it should return the same result as fn.
2. Every subsequent time it is called, it should return undefined. */

var once = function (fn) {
    let x = false;
    let y;

    return function () {
        if (!x) {
            x = true;
            y = fn.apply(this, arguments);
            return y;
        } else {
            return undefined;
        }
    };
}

let fn = (a, b, c) => (a + b + c)
let onceFn = once(fn)

console.log(onceFn(1, 2, 3)); // 6
console.log(onceFn(2, 3, 6)); // returns undefined without calling fn