const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
    result: [],

    getLength() {
        return this.result.length;
    },
    addLink(value) {
        if (value === undefined) {
            this.result.push(`( )`);
        } else {
            this.result.push(`( ${value} )`);
        }
        return this;
    },
    removeLink(position) {
        if (position < 1 || position !== Number(position) || position !== parseInt(position) || !this.result[position]) {
            this.result.length = 0;
            throw new Error("You can't remove incorrect link!");
        } else {
            this.result.splice(position - 1, 1);
        }
        return this;
    },
    reverseChain() {
        this.result.reverse();
        return this;
    },
    finishChain() {
        const finishMessage = this.result.join("~~");
        this.result.length = 0;
        return finishMessage;
    }
};

module.exports = {
    chainMaker
};
