/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let start = 0,
    end = s.length - 1,
    isValid = true;
  s = s.toLowerCase();
  while (start < end) {
    if (
      !(
        (s[start] >= "A" && s[start] <= "Z") ||
        (s[start] >= "a" && s[start] <= "z") ||
        (s[start] >= "0" && s[start] <= "9")
      )
    ) {
      start++;
      continue;
    } else if (
      !(
        (s[end] >= "A" && s[end] <= "Z") ||
        (s[end] >= "a" && s[end] <= "z") ||
        (s[end] >= "0" && s[end] <= "9")
      )
    ) {
      end--;
      continue;
    }
    if (s[start] !== s[end]) {
      isValid = false;
      break;
    } else {
      start++;
      end--;
    }
  }
  return isValid;
};