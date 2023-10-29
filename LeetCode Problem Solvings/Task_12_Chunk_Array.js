var chunk = function (arr, size) {
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
        const chunk = arr.slice(i, i + size);
        chunks.push(chunk);
    }
    return chunks;
};

let arr = [1, 2, 3, 4, 5, 6, 7];
let size = 2;

console.log(chunk(arr, size));