// Write a function that takes an array of numbers as input and returns the average of all the numbers in the array.

function averageOfAll(arr) {
    let sum = 0;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (!isNaN(arr[i])) {
            sum = arr[i] + sum;
            count++;
        }
    }
    if (count === 0) {
        return 0;
    }
    return sum / count;
}

const arr = [1, 2, 3, 4, 'b', 5, 6, 'a', 's'];
console.log(`The average of all the numbers: ${averageOfAll(arr)}`);

//Output: The average of all the numbers: 3.5
