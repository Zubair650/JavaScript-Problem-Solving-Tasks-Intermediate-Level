// Write a function that takes an array of numbers as input and returns the sum of all the even numbers in the array.

function sumOfEvens(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sum = arr[i] + sum;
        }
    }
    return sum;
}

const arr = [1, 2, 3, 4, 5];
console.log('The Sum of even numbers is ' + sumOfEvens(arr))

//Output: The Sum of even numbers is 6

