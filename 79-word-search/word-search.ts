function exist(board: string[][], word: string): boolean {
    const direction = [
        [0, -1],
        [0, 1],
        [1, 0],
        [-1, 0]
    ];

    const isValidCell = (n, m, i, j) => i >= 0 && j >= 0 && i < n && j < m;

    let row = board.length;
    let col = board[0].length;

    const hasVisited = new Set<string>();

    function dfs(x, y, wordIndex) {
        if (wordIndex === word.length) return true;

        let isThere = false;
        const originalChar = board[x][y];
        board[x][y] = '#'; // Mark the cell as visited

        for (const [dx, dy] of direction) {
            let newX = x + dx;
            let newY = y + dy;

            if (isValidCell(row, col, newX, newY) && board[newX][newY] === word.charAt(wordIndex)) {

                isThere = isThere || dfs(newX, newY, wordIndex+1);
            }
        }
        
        board[x][y] = originalChar;
        return isThere;
    }

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (board[i][j] === word.charAt(0) && dfs(i,j,1)) {
                return true;
            }
        }
    }
    return false;
}
