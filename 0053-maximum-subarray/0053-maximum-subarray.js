/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
     if (nums.length === 0) {
    return 0;
  }
  let curSum = nums[0];
  let maxSum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    curSum = Math.max(nums[i], curSum + nums[i]);
    if (curSum > maxSum) {
      maxSum = curSum;
    }
  }
  return maxSum;
};