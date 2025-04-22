/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
     let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const element = fn(arr[i], i);
    newArr.push(element);
  }
  return newArr;
};