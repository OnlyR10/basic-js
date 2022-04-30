const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
    if (!Array.isArray(arr)) {
        throw new Error("'arr' parameter must be an instance of the Array!");
    }
    const result = arr.map((elem) => elem);
    arr.forEach((elem, index) => {
        switch (elem) {
            case "--discard-next":
                if (result[index + 1]) {
                    delete result[index];
                    delete result[index + 1];
                } else {
                    delete result[index];
                }
                break;
            case "--discard-prev":
                if (result[index - 1]) {
                    delete result[index - 1];
                    delete result[index];
                } else {
                    delete result[index];
                }
                break;
            case "--double-next":
                if (result[index + 1]) {
                    result[index] = result[index + 1];
                } else {
                    delete result[index];
                }
                break;
            case "--double-prev":
                if (result[index - 1]) {
                    result[index] = result[index - 1];
                } else {
                    delete result[index];
                }
                break;
        }
    });
    return result.filter(elem => elem);
}

module.exports = {
    transform
};
