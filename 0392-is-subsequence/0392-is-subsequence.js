/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let sIndex = 0,
    tIndex = 0;

  if (s === "") {
    return true;
  }

  while (tIndex < t.length) {
    if (s[sIndex] === t[tIndex]) {
      sIndex++;
    }
    tIndex++;
    if (sIndex === s.length) {
      return true;
    }
  }

  return false;
};