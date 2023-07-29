// Write a function that takes a string as input and returns the reverse of the string.

function reverseOfString(str) {
    let revStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        revStr += str[i]
    }
    return revStr;
}

const str = "Hello";
console.log(`The reverse of ${str} is ${reverseOfString(str)}`);

// Output: The reverse of Hello is olleH