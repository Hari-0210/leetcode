/**
 * @param {string[]} words
 * @param {number[]} groups
 * @return {string[]}
 */
var getWordsInLongestSubsequence = function(words, groups) {
    const n = words.length;
    const dp = Array(n).fill(1);
    const prev = Array(n).fill(-1);

    const hammingDistance = (a, b) => {
        if (a.length !== b.length) return Infinity;
        let count = 0;
        for (let i = 0; i < a.length; i++) {
            if (a[i] !== b[i]) count++;
        }
        return count;
    };

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (
                groups[i] !== groups[j] &&
                words[i].length === words[j].length &&
                hammingDistance(words[i], words[j]) === 1
            ) {
                if (dp[j] + 1 > dp[i]) {
                    dp[i] = dp[j] + 1;
                    prev[i] = j;
                }
            }
        }
    }

    let maxIndex = 0;
    for (let i = 1; i < n; i++) {
        if (dp[i] > dp[maxIndex]) {
            maxIndex = i;
        }
    }

    const result = [];
    while (maxIndex !== -1) {
        result.push(words[maxIndex]);
        maxIndex = prev[maxIndex];
    }

    return result.reverse();
};