// Write a function that takes a sentence as input and returns the word count of the sentence.

function wordCount(str) {
    const words = str.split(' ');
    return words.length;
}
const str = "What is your name?";
console.log(`The number of words in the given sentence: ${wordCount(str)}`);

//Output: The number of words in the given sentence: 4