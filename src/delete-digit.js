const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
    const containerForOptions = [];
    for (let i = 0; i < `${n}`.length; i++) {
        const arr = Array.from(`${n}`);
        arr.splice(i, 1);
        containerForOptions.push(arr.join(""));
    }
    return Number(containerForOptions.sort((a, b) => b - a)[0]);
}

module.exports = {
    deleteDigit
};
