/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var colorTheGrid = function(m, n) {
    const MOD = 1e9 + 7; 
    function getValidStates() {
    const results = [];
    function backtrack(pos, curr) {
      if (pos === m) {
        results.push([...curr]);
        return;
      }
      for (let color = 0; color < 3; color++) {
        if (pos === 0 || curr[pos - 1] !== color) {
          curr.push(color);
          backtrack(pos + 1, curr);
          curr.pop();
        }
      }
    }
    backtrack(0, []);
    return results;
  }

  const states = getValidStates();
  console.log("states", states);

  const stateToIndex = new Map(states.map((s, i) => [s.join(","), i]));
  const numStates = states.length;

  const transitions = Array.from({ length: numStates }, () => []);
  console.log("transitions", transitions);

  for (let i = 0; i < numStates; i++) {
    for (let j = 0; j < numStates; j++) {
      let canFollow = true;
      for (let k = 0; k < m; k++) {
        if (states[i][k] === states[j][k]) {
          canFollow = false;
          break;
        }
      }
      if (canFollow) transitions[i].push(j);
    }
  }
  console.log("transitions new", transitions);

  const dp = Array.from({ length: n }, () => Array(numStates).fill(0));
  for (let i = 0; i < numStates; i++) dp[0][i] = 1;

  for (let col = 1; col < n; col++) {
    for (let curr = 0; curr < numStates; curr++) {
      for (const prev of transitions[curr]) {
        dp[col][curr] = (dp[col][curr] + dp[col - 1][prev]) % MOD;
      }
    }
  }
  console.log("dp", dp);

  let result = 0;
  for (let i = 0; i < numStates; i++) {
    result = (result + dp[n - 1][i]) % MOD;
  }
  console.log("result", result);

  return result;
};