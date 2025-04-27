/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
     if (grid.length === 0) return 0;
    
    const rows = grid.length;
    const cols = grid[0].length;
    
    function dfs(grid, i, j) {
        if (i < 0 || j < 0 || i >= rows || j >= cols || grid[i][j] === '0') {
            return;
        }
        
        // Mark the cell as visited by setting it to '0'
        grid[i][j] = '0';
        
        // Continue the search in all four possible directions
        dfs(grid, i + 1, j);
        dfs(grid, i - 1, j);
        dfs(grid, i, j + 1);
        dfs(grid, i, j - 1);
    }
    
    let numIslands = 0;
    
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === '1') {
                numIslands += 1;
                dfs(grid, i, j);
            }
        }
    }
    
    return numIslands;
};