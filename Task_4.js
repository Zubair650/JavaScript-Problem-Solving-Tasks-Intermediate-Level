// Write a function that takes two arrays as input and returns a new array containing only the elements that are common to both arrays.

function commonElements(arr1, arr2) {
    let commonArr = []
    for (let i = 0; i < arr2.length; i++) {
        if (arr1.includes(arr2[i])) {
            commonArr = [...commonArr, arr2[i]]
        }
    }
    return commonArr;
}
const arr1 = ['a', 'b', 'c', 'd', 5, 'p', 9]
const arr2 = ['x', '9', 'a', 'z', 'c', 'd', 'm', 'o', 5]
console.log(`The elements that are common to both arrays are: ${commonElements(arr1, arr2)}`)

//Output: The elements that are common to both arrays are: a,c,d,5