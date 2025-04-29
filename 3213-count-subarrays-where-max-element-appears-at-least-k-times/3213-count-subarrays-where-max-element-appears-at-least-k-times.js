/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function(nums, k) {
    let maxElement = 0;
  for (let n of nums) {
    maxElement = Math.max(maxElement, n);
  }

  let count = 0;
  let l = 0;
  let n = nums.length;
  let maxFound = 0;

  for (let r = 0; r < n; r++) {
    if (nums[r] === maxElement) maxFound++;

    while (maxFound === k) {
      count += n - r;
      if (nums[l] === maxElement) maxFound--;
      l++;
    }
  }

  return count;
};