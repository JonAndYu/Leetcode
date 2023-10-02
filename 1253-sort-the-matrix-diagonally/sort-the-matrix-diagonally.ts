function diagonalSort(mat: number[][]): number[][] {
    const n = mat.length;
    const m = mat[0].length;
    const sortedMat = Array.from({ length: n }, () => Array(m).fill(0));

    const getDiag = (r: number, c: number) => {
        const out = [];
        while (r < n && c < m) {
            out.push(mat[r][c]);
            r++;
            c++;
        }
        return out;
    }

    const setDiag = (r: number, c: number, cells: number[]) => {
        while (r < n && c < m) {
            sortedMat[r][c] = cells.shift();
            r++;
            c++;
        }
    }

    for (let c = 0; c < m; c++) {
        const diag = getDiag(0, c);
        setDiag(0, c, diag.sort((a,b) => a - b))
    }
    for (let r = 1; r < n; r++) {
        const diag = getDiag(r, 0);
        setDiag(r, 0, diag.sort((a,b) => a - b));
    }

    return sortedMat;
};