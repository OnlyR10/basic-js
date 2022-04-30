const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
    constructor() {
        this.result = 1;
        this.maxCount = 1;
        this.count = 1;
    }

    calculateDepth(arr) {
        arr.forEach((element) => {
            if (Array.isArray(element)) {
                this.count++;
                this.calculateDepth(element);
            }
        });

        if (this.maxCount < this.count) {
            this.maxCount = this.count;
        }
        this.count--;

        if (this.count < 1) {
            this.result = this.maxCount;
            this.resetCounter();
            return this.result;
        }
    }

    resetCounter() {
        this.maxCount = 1;
        this.count = 1;
    }
}

module.exports = {
    DepthCalculator
};
