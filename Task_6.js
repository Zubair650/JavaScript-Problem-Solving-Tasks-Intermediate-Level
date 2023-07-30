// Write a function that takes an array of strings as input and returns the longest string in the array.

function longestString(str) {
    let longest = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i].length > longest.length) {
            longest = str[i];
        }
    }
    return longest;
}

const str = ['hi', 'good morning', 'hello', 'bye', 'good night']
console.log(`The longest string in the array is ${longestString(str)}`);

//Output: The longest string in the array is good morning