/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      const element = arr[i];
      newArr.push(element);
    }
  }
  return newArr;
};