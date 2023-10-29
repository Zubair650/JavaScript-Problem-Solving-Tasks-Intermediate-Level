function ArrayWrapper(arr) {
    this.arr = arr;
}

ArrayWrapper.prototype.valueOf = function () {
    return this.arr.reduce((acc, val) => acc + val, 0);
};

ArrayWrapper.prototype.toString = function () {
    return '[' + this.arr.join(',') + ']';
};

// Example 1
const obj1 = new ArrayWrapper([1, 2]);
const obj2 = new ArrayWrapper([3, 4]);
const result1 = obj1 + obj2;
console.log(result1); // Output: 10

// Example 2
const obj = new ArrayWrapper([23, 98, 42, 70]);
const result2 = obj.toString();
console.log(result2); // Output: "[23,98,42,70]"

// Example 3
const obj3 = new ArrayWrapper([]);
const obj4 = new ArrayWrapper([]);
const result3 = obj3 + obj4;
console.log(result3); // Output: 0
