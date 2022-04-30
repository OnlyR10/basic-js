const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
    let baseStr = `${str}`;
    const separator = "+";
    const additionSeparator = "|"

    if (!options || !Object.keys(options)) {
        return baseStr;
    }

    if (options.addition !== undefined) {
        options.addition = `${options.addition}`;

        if (options.additionRepeatTimes) {
            if (options.additionSeparator) {
                baseStr += concat(options.addition, options.additionRepeatTimes, options.additionSeparator);
            } else {
                baseStr += concat(options.addition, options.additionRepeatTimes, additionSeparator);
            }
        } else {
            baseStr += options.addition;
        }
    }

    if (options.repeatTimes) {
        if (options.separator) {
            return concat(baseStr, options.repeatTimes, options.separator);
        } else {
            return concat(baseStr, options.repeatTimes, separator);
        }
    }

    return baseStr;

    function concat(str, repeat, separator) {
        const group = [];
        for (let i = 0; i < repeat; i++) {
            group.push(str);
        }
        return group.join(`${separator}`);
    }
}


module.exports = {
    repeater
};
