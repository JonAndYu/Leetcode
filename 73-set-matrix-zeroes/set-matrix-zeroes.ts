/**
 Do not return anything, modify matrix in-place instead.

 [Col arrays] if zero then everything needs to be 0 in the column
 [R
  o
  w]

  We'll have a variable called rowZero that accounts for the 0,0 column for thje row.
  If a row is 0 that means the whole row shouold be zero. matrix[i][const] = 0
  If a col is 0 that means the whole column should be zero. matrix[const][i] = 0
 */
function setZeroes(matrix: number[][]): void {
    let rowZero = false;
    const rows = matrix.length;
    const cols = matrix[0].length

    // Creating the "Row/Column arrays"
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (matrix[row][col] === 0) {
                // Set column array = 0
                matrix[0][col] = 0;
                // Set row array = 0;
                if (row === 0) {
                    rowZero = true;
                } else {
                    matrix[row][0] = 0;
                }
            }
        }
    }

    for (let row = 1; row < rows; row++) {
        for (let col = 1; col < cols; col++) { 
            if (matrix[0][col] === 0 || matrix[row][0] === 0) {
                matrix[row][col] = 0;
            }
        }
    }

    if (matrix[0][0] === 0) {
        for (let row = 0; row < rows; row++) {
            matrix[row][0] = 0;
        }
    }

    if (rowZero) {
        for (let col = 0; col < cols; col++) {
            matrix[0][col] = 0;
        }
    }
};