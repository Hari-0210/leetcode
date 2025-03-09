/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let maxReachable = 0;
    
    for (let i = 0; i < nums.length; i++) {
        // If the current index is greater than the maximum reachable index, we cannot proceed
        if (i > maxReachable) return false;
        
        // Update the maximum reachable index
        maxReachable = Math.max(maxReachable, i + nums[i]);
        
        // If the maximum reachable index is greater than or equal to the last index, return true
        if (maxReachable >= nums.length - 1) return true;
    }
    
    // If we finish the loop, check if we can reach the last index
    return maxReachable >= nums.length - 1;
};