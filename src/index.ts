const RomanConversion: any = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

const NumberConversion: any = {
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

  romanToNumber(str: string): number {
    return Array.from(str.toUpperCase())
      .map(char => RomanConversion[char] ?? 0)
      .reduce(
        (sum, item, index, arr) =>
          index > 0 && arr[index - 1] < item
            ? sum + item - arr[index - 1] - arr[index - 1]
            : sum + item,
        0);
  }

  numberToRoman(num: number): string {
    let str =  '';
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

export const romanNumerals = new RomanNumberConverter();
export default romanNumerals;

console.log(romanNumerals.romanToNumber('')); // 0
console.log(romanNumerals.romanToNumber('IX')); // 9
console.log(romanNumerals.romanToNumber('XXXIX')); // 39
console.log(romanNumerals.romanToNumber('DCCLXXXIX')); // 789
console.log(romanNumerals.romanToNumber('CCVII')); // 207
console.log(romanNumerals.romanToNumber('MDCLXVI')); // 1666
console.log(romanNumerals.romanToNumber('MMCDXXI')); // 2421

console.log(romanNumerals.numberToRoman(12)); // XII
console.log(romanNumerals.numberToRoman(19)); // XIX
console.log(romanNumerals.numberToRoman(141)); // CXLI
console.log(romanNumerals.numberToRoman(1900)); // MCM
console.log(romanNumerals.numberToRoman(2020)); // MMXX
console.log(romanNumerals.numberToRoman(5123)); // MMMMMCXXIII
