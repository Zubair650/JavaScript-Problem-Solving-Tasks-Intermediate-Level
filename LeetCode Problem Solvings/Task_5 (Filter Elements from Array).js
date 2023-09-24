// let arr = [10, 20, 30, 40];
// let result = [];
// var filter = function (arr, fn) {
//     return fn(arr)
// }

// const fn = function greaterThan10(arr) {
//     result = arr.filter(a => a > 10)
//     return result;
// }

// console.log(filter(arr, fn))


function filter(arr, fn) {
    const result = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (fn(arr[i], i)) {
        result.push(arr[i]);
      }
    }
  
    return result;
  }
  
  // Example usage 1
  const arr1 = [0, 10, 20, 30];
  const fn1 = function greaterThan10(n) {
    return n > 10;
  };
  
  const newArray1 = filter(arr1, fn1);
  console.log(newArray1); // Output: [20, 30]
  
  // Example usage 2
  const arr2 = [1, 2, 3];
  const fn2 = function firstIndex(n, i) {
    return i === 0;
  };
  
  const newArray2 = filter(arr2, fn2);
  console.log(newArray2); // Output: [1]
  
  // Example usage 3
  const arr3 = [-2, -1, 0, 1, 2];
  const fn3 = function plusOne(n) {
    return n + 1;
  };
  
  const newArray3 = filter(arr3, fn3);
  console.log(newArray3); // Output: [-2, 0, 1, 2]
  