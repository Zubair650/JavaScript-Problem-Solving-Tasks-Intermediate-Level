/* Write a function that checks if a given value is an instance of a given class or superclass. For this problem, an object is considered an instance of a given class if that object has access to that class's methods.

There are no constraints on the data types that can be passed to the function. For example, the value or the class could be undefined. */

function checkIfInstanceOf(obj, classFunction) {
    if (classFunction === null || classFunction === undefined) {
        return false;
    }
    while (obj !== null && obj !== undefined) {
        const proto = Object.getPrototypeOf(obj);
        if (proto === classFunction.prototype) {
            return true;
        }
        obj = proto;
    }
    return false;
}
// Example 1
const result1 = () => checkIfInstanceOf(new Date(), Date);
console.log(result1()); // true

// Example 2
const result2 = () => {
    class Animal { }
    class Dog extends Animal { }
    return checkIfInstanceOf(new Dog(), Animal);
};
console.log(result2()); // true

// Example 3
const result3 = () => checkIfInstanceOf(Date, Date);
console.log(result3()); // false

// Example 4
const result4 = () => checkIfInstanceOf(5, Number);
console.log(result4()); // false

const result5 = () => checkIfInstanceOf(5n, Object);
console.log(result5());

const result6 = () => checkIfInstanceOf(NaN, Object);
console.log(result6());

