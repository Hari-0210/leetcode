/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    let firstRowZero = false, firstColZero = false;

    // Check if first row has zero
    for (let j = 0; j < n; j++) {
        if (matrix[0][j] === 0) firstRowZero = true;
    }
    // Check if first column has zero
    for (let i = 0; i < m; i++) {
        if (matrix[i][0] === 0) firstColZero = true;
    }
    // Use first row and column as markers
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }
    // Set zeroes based on markers
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
    }
    // Set first row and column
    if (firstRowZero) {
        for (let j = 0; j < n; j++) matrix[0][j] = 0;
    }
    if (firstColZero) {
        for (let i = 0; i < m; i++) matrix[i][0] = 0;
    }
}