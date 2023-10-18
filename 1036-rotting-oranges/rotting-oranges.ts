function orangesRotting(grid: number[][]): number {
    
    // Define constants/functions

    type cell = [number, number];
    
    const direction = [
        [0, 1],     // up
        [0,-1],     // down
        [1, 0],     // right
        [-1,0],     // left
    ];
    
    const isValidCell = (n, m, x, y) => x >= 0 && x < n && y >= 0 && y < m;
    
    const n = grid.length;
    const m = grid[0].length;

    let queue = [];


    function bfs() {
        let time = 0;

        while (queue.length > 0) {
            let currLen = queue.length;
            for (let i = 0 ; i < currLen; i++) {
                let [curr_x, curr_y] = queue.shift();
                for (let [dx, dy] of direction) {
                    let newX = curr_x + dx;
                    let newY = curr_y + dy
                    if (isValidCell(n, m, newX, newY) && grid[newX][newY] === 1) {
                        grid[newX][newY] = 2;
                        queue.push([newX, newY]);
                    }
                }
            }
            if (queue.length > 0) {
                time++;
            }
        }
        return time;
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (grid[i][j] === 2) {
                queue.push([i,j]);
            }
        }
    }

    let maxTime = bfs();
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (grid[i][j]===1) return -1;
        }
    }

    return maxTime;
};
