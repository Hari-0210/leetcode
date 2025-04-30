/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let evenCount = 0;
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    let digitCount = num.toString().length;
    if (digitCount % 2 === 0) {
      evenCount++;
    }
  }
  return evenCount;
};