"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.romanNumerals = void 0;
const RomanConversion = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1],
];
class RomanNumeralConverter {
    romanToNumber(str) {
        return Array.from(str.toUpperCase())
            .map(char => { var _a, _b; return (_b = (_a = RomanConversion.find(convert => convert[0] == char)) === null || _a === void 0 ? void 0 : _a[1]) !== null && _b !== void 0 ? _b : 0; })
            .reduce((sum, item, index, arr) => index > 0 && arr[index - 1] < item
            ? sum + item - arr[index - 1] - arr[index - 1]
            : sum + item, 0);
    }
    numberToRoman(num) {
        let str = '';
        for (const [key, value] of RomanConversion) {
            const symbolCount = Math.floor(num / value);
            if (symbolCount > 0) {
                str += key.repeat(symbolCount);
                num = num % value;
            }
        }
        return str;
    }
}
exports.romanNumerals = new RomanNumeralConverter();
exports.default = exports.romanNumerals;
