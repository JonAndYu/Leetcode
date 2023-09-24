/*
    Time Comlexity: Creating the counts O(n) + iterating throught he keys O(n)
    Space Complexity: O(n) cause the counts are max size n.
*/
function equalPairs(grid: number[][]): number {
    let rowCount: Record<string, number> = {};
    let colCount: Record<string, number> = {};
    let count: number = 0;

    for (let i = 0; i < grid.length; i++) {
        let rowStr = JSON.stringify(grid[i]);
        let colStr = JSON.stringify(grid.map((row) => row[i]));
        rowCount[rowStr] = (rowCount[rowStr] || 0) + 1;
        colCount[colStr] = (colCount[colStr] || 0) + 1;
    }

    for (const key in rowCount) {
        if (key in colCount) count += rowCount[key]*colCount[key];
    }
    return count;
};