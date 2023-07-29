// Write a function that takes a string as input and returns the number of vowels in the string.

function numOfVowels(str) {
    let count = 0;
    let vowels = 'aeiou';
    str = str.toLowerCase();
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    return count;
}

const str = 'Animal'
console.log(`The number of vowels in the ${str} is ${numOfVowels(str)}`)

//Output: The number of vowels in the Animal is 3