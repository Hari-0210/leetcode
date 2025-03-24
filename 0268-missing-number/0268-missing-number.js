/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
     let xor = 0;
    const n = nums.length;

    for (let i = 0; i < n; i++) {
        xor ^= nums[i];
    }

    for (let i = 0; i <= n; i++) {
        xor ^= i;
    }

    return xor;
};