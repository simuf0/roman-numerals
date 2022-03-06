type RomanConversion = [string, number][];

const RomanConversion: RomanConversion = [
  ['M',  1000],
  ['CM', 900],
  ['D',  500],
  ['CD', 400],
  ['C',  100],
  ['XC', 90],
  ['L',  50],
  ['XL', 40],
  ['X',  10],
  ['IX', 9],
  ['V',  5],
  ['IV', 4],
  ['I',  1],
];

class RomanNumeralConverter {

  romanToNumber(str: string): number {
    return Array.from(str.toUpperCase())
      .map(char => RomanConversion.find(convert => convert[0] == char)?.[1] ?? 0)
      .reduce(
        (sum, item, index, arr) =>
          index > 0 && arr[index - 1] < item
            ? sum + item - arr[index - 1] - arr[index - 1]
            : sum + item,
        0);
  }

  numberToRoman(num: number): string {
    let str =  '';
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

export const romanNumerals = new RomanNumeralConverter();
export default romanNumerals;