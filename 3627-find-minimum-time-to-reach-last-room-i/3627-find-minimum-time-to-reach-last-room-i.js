/**
 * @param {number[][]} moveTime
 * @return {number}
 */
var minTimeToReach = function(moveTime) {
    const n = moveTime.length;
  const m = moveTime[0].length;
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  const pq = [[0, 0, 0]];
  const visited = new Set();

  while (pq.length > 0) {
    pq.sort((a, b) => a[0] - b[0]);
    const [time, row, col] = pq.shift();

    if (row === n - 1 && col === m - 1) return time;

    const key = `${row},${col}`;
    if (visited.has(key)) continue;
    visited.add(key);

    for (const [dr, dc] of directions) {
      const newRow = row + dr;
      const newCol = col + dc;

      if (newRow >= 0 && newRow < n && newCol >= 0 && newCol < m) {
        const waitTime = Math.max(moveTime[newRow][newCol] - time, 0);
        const newTime = time + 1 + waitTime;

        pq.push([newTime, newRow, newCol]);
      }
    }
  }

  return -1;
};