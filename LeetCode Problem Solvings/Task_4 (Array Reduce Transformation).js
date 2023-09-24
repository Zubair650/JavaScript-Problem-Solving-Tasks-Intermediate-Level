var reduce = function (nums, fn, init) {
    for (let i = 0; i < nums.length; i++) {
        init = fn(init, nums[i])
    }
    return init;
};
let nums = [1, 2, 3, 4];

function sum(accum, curr) {
    accum = accum + curr;
    return accum;
}
console.log(reduce(nums, sum, 0));