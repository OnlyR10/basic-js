const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
    let result = 0;
    const columnLimit = [];
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (columnLimit.some((el) => el === j) || matrix[i][j] < 0) {
                continue;
            }
            if (matrix[i][j] === 0) {
                columnLimit.push(j);
            } else {
                result += matrix[i][j];
            }
        }
    }
    return result;
}

module.exports = {
    getMatrixElementsSum
};
