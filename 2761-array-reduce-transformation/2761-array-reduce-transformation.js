
/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
  let currAcc = init;
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    currAcc = fn(currAcc, element);
  }
  return currAcc;
};
