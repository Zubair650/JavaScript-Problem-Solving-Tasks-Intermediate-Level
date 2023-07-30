// Write a function that takes an array of numbers as input and returns a new array with the elements in reverse order.

function reverseOrder(arr1) {
    let arr2 = [];
    for (let i = arr1.length - 1; i >= 0; i--) {
        arr2 = [...arr2, arr1[i]]
    }
    return arr2;

}

const arr1 = ['hi', 'good morning', 'hello', 'bye', 'good night']
console.log(reverseOrder(arr1));

//Output: [ 'good night', 'bye', 'hello', 'good morning', 'hi' ]