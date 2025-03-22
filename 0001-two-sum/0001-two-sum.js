/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let ans = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      ans = nums[i] + nums[j];
      if (ans === target) {
        return [i, j];
      }
    }
  }
};