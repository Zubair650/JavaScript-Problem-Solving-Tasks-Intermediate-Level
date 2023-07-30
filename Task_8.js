// Write a function that takes a string as input and returns true if it is a palindrome (reads the same forwards and backwards), and false otherwise.

function isPalindrome(str) {
    const reverse = str.split('').reverse().join('');
    return str === reverse;
}

const str = 'noon'
console.log(isPalindrome(str));

//Output: true