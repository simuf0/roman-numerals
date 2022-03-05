"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.romanNumerals = void 0;
const RomanConversion = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
};
const NumberConversion = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
};
class RomanNumberConverter {
    romanToNumber(str) {
        return Array.from(str)
            .map(char => { var _a; return (_a = RomanConversion[char]) !== null && _a !== void 0 ? _a : 0; })
            .reduce((sum, item, index, arr) => index > 0 && arr[index - 1] < item
            ? sum + item - arr[index - 1] - arr[index - 1]
            : sum + item, 0);
    }
    numberToRoman(num) {
        let str = '';
        for (const key in NumberConversion) {
            const symbolCount = Math.floor(num / NumberConversion[key]);
            if (symbolCount > 0) {
                str += key.repeat(symbolCount);
                num = num % NumberConversion[key];
            }
        }
        return str;
    }
}
exports.romanNumerals = new RomanNumberConverter();
exports.default = exports.romanNumerals;
console.log(exports.romanNumerals.romanToNumber(''));
console.log(exports.romanNumerals.romanToNumber('IX'));
console.log(exports.romanNumerals.romanToNumber('XXXIX'));
console.log(exports.romanNumerals.romanToNumber('DCCLXXXIX'));
console.log(exports.romanNumerals.romanToNumber('CCVII'));
console.log(exports.romanNumerals.romanToNumber('MDCLXVI'));
console.log(exports.romanNumerals.romanToNumber('MMCDXXI'));
console.log(exports.romanNumerals.numberToRoman(12));
console.log(exports.romanNumerals.numberToRoman(19));
console.log(exports.romanNumerals.numberToRoman(141));
console.log(exports.romanNumerals.numberToRoman(1900));
console.log(exports.romanNumerals.numberToRoman(2020));
console.log(exports.romanNumerals.numberToRoman(5123));