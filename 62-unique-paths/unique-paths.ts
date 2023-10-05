function uniquePaths(m: number, n: number): number {
    [m, n] = [n, m];
    let dp: number[][] = Array.from( {length : n}, () => Array(m).fill(1));

    // Iterate starting from the bottom right to the upper left;
    for (let i = n - 2; i >= 0; i--) {
        for (let j = m - 2; j >= 0; j--) {
            dp[i][j] = dp[i+1][j] + dp[i][j+1];
        }
    }

    return dp[0][0];
};