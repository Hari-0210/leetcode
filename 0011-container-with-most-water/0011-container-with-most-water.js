/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0,
    right = height.length - 1,
    maxArea = 0;

  while (left < right) {
    let currWidth = right - left;
    let currHeight = Math.min(height[left], height[right]);
    let currArea = currWidth * currHeight;
    maxArea = Math.max(maxArea, currArea);
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxArea;
};