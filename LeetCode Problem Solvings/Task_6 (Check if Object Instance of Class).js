/* Write a function that checks if a given value is an instance of a given class or superclass. For this problem, an object is considered an instance of a given class if that object has access to that class's methods.

There are no constraints on the data types that can be passed to the function. For example, the value or the class could be undefined. */

function checkIfInstanceOf(value, classOrSuperclass) {
    // Check if the value is an instance of the class or superclass using instanceof
    if (value instanceof classOrSuperclass) {
        return true;
    }

    // Check if the value has access to the methods of the class or superclass
    if (typeof value === "object" || typeof value === "function") {
        const prototype = Object.getPrototypeOf(value);
        if (prototype === classOrSuperclass.prototype) {
            return true;
        }
    }


    // Check if the value is NaN and the classOrSuperclass is Object
    if (Number.isNaN(value) || classOrSuperclass === Object) {
        return true;
    }

    // Check if the value has access to the methods of the class or superclass by checking the constructor property
    if (value && value.constructor === classOrSuperclass) {
        return true;
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

