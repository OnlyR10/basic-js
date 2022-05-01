const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
    constructor(mod) {
        this.mod = mod;
        this.alphabet = [];
        this.count = "";
        this.result;
    }

    encrypt(message, key) {
        if (message === undefined || key === undefined) {
            throw new Error("Incorrect arguments!");
        }
        if (!this.alphabet.length) {
            this.createAnAlphabet();
        }
        message = message.toLowerCase();
        key = key.toLowerCase();
        const length = message.length;
        let str = "";
        while (true) {
            str += key;
            if (str.length > length) {
                str = str.slice(0, length);
                break;
            }
        }

        for (let i = 0; i < message.length; i++) {
            if (this.alphabet.includes(message[i])) {
                const row = this.alphabet.findIndex(elem => elem === message[i]);
                const col = this.alphabet.findIndex(elem => elem === str[i]);
                let targetLetter = row + col;
                if (targetLetter > 25) {
                    this.count += this.alphabet[targetLetter - 26];
                } else {
                    this.count += this.alphabet[targetLetter];
                }
            } else {
                let startText = str.slice(0, i);
                let endText = str.slice(i);
                str = startText + " " + endText;
                this.count += message[i];
            }
        }

        this.result = this.count;
        this.count = "";



        if (this.mod || this.mod === undefined) {
            return this.result.toLocaleUpperCase();
        } else {
            return this.result.toLocaleUpperCase().split("").reverse().join("");
        }
    }

    decrypt(encryptedMessage, key) {
        if (encryptedMessage === undefined || key === undefined) {
            throw new Error("Incorrect arguments!");
        }
        if (!this.alphabet.length) {
            this.createAnAlphabet();
        }
        encryptedMessage = encryptedMessage.toLowerCase();
        key = key.toLowerCase();
        const length = encryptedMessage.length;
        let str = "";
        while (true) {
            str += key;
            if (str.length > length) {
                str = str.slice(0, length);
                break;
            }
        }

        for (let i = 0; i < encryptedMessage.length; i++) {
            if (this.alphabet.includes(encryptedMessage[i])) {
                const row = this.alphabet.findIndex(elem => elem === encryptedMessage[i]);
                const col = this.alphabet.findIndex(elem => elem === str[i]);
                const targetLetter = row - col;
                if (targetLetter < 0) {
                    this.count += this.alphabet[26 - (col - row)];
                } else {
                    this.count += this.alphabet[targetLetter];
                }
            } else {
                let startText = str.slice(0, i);
                let endText = str.slice(i);
                str = startText + " " + endText;
                this.count += encryptedMessage[i];
            }
        }

        this.result = this.count;
        this.count = "";

        if (this.mod || this.mod === undefined) {
            return this.result.toLocaleUpperCase();
        } else {
            return this.result.toLocaleUpperCase().split("").reverse().join("");
        }
    }

    createAnAlphabet() {
        for (let i = 0; i < 26; i++) {
            this.alphabet.push(String.fromCharCode(97 + i));
        }
    }
}

module.exports = {
    VigenereCipheringMachine
};
