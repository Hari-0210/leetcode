/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
      return (result = s
    .split(" ")
    .filter((e) => e != "")
    .reverse()
    .join(" ")
    .trim());

};