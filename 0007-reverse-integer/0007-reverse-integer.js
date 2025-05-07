/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
   let ans =
    parseInt(x.toString().split("").reverse().join("").replace(/-/g, "")) *
    Math.sign(x);
  return ans > Math.pow(2, 31) - 1 ? 0 : ans < Math.pow(-2, 31) ? 0 : ans;
};