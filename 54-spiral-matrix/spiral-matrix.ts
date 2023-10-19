function spiralOrder(matrix: number[][]): number[] {
    let spiralOrder = [];

    let left = 0,
        right = matrix[0].length,
        top = 0,
        bottom = matrix.length;

    while (left < right && top < bottom) {
        // Iterate through the top row.
        for (let i = left; i < right; i++) spiralOrder.push(matrix[top][i]);
        top++;
        // Iterate through the right col.
        for (let i = top; i < bottom; i++) spiralOrder.push(matrix[i][right - 1]);
        right--;

        if( !(left < right && top < bottom)) break;

        // Iterate through the bottom row.
        for (let i = right - 1; i >= left; i--) spiralOrder.push(matrix[bottom-1][i]);
        bottom--;
        // Iterate through the left col.
        for (let i = bottom - 1; i >= top; i--) spiralOrder.push(matrix[i][left]);
        left++;
    }
    return spiralOrder;
};