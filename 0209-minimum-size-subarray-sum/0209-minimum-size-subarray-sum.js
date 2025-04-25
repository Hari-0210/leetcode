/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let left = 0,
    right = 0;
  let minLength = Infinity;
  let sum = 0;
  while (right < nums.length) {
    sum = sum + nums[right];
    right++;
    while (sum >= target) {
      minLength = Math.min(minLength, right - left);
      sum = sum - nums[left];
      left++;
    }
  }
  return minLength === Infinity ? 0 : minLength;
};