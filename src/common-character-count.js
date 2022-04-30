const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
    if (!s1.length || !s2.length) return 0;
    [firstComparisonArgument, secondComparisonArgument] = [Array.from(s1), Array.from(s2)];
    return firstComparisonArgument.filter((comparisonElem) => {
        const index = secondComparisonArgument.findIndex((letter) => letter === comparisonElem);
        if (index >= 0) {
            return secondComparisonArgument.splice(index, 1);
        }
    }).length;
}

module.exports = {
    getCommonCharacterCount
};
