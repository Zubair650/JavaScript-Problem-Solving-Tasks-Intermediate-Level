// Write a function that takes a number as input and returns true if it is a prime number, and false otherwise.

function isPrimeNum(num) {
    if (num < 2 || isNaN(num)) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(isPrimeNum(11))

//Output: true