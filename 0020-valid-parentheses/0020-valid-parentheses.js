/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let arr = [];
  let map = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  for (let i = 0; i < s.length; i++) {
    if (s[i] in map) {
      arr.push(s[i]);
    } else {
      if (arr.length === 0 || map[arr.pop()] !== s[i]) {
        return false;
      }
    }
  }
  return arr.length === 0;
};