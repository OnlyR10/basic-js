const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
    const result = {};
    const changeArr = [];
    domains.forEach(elem => changeArr.push(elem.split(".").reverse()));

    changeArr.forEach((elem, index, array) => {
        let reverseDNS = "";
        for (let i = 0; i < elem.length; i++) {
            reverseDNS += `.${elem[i]}`;
            if (!result[reverseDNS]) {
                result[reverseDNS] = array.filter((elem) => elem.join(".").includes(reverseDNS.slice(1))).length;
            }

        }
    });
    return result;
}

module.exports = {
    getDNSStats
};
