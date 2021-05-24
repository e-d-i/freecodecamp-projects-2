// FCC Challenge 2: Roman Numeral Converter
// Convert the given number into a roman numeral.
// All roman numerals answers should be provided in upper-case.

function convertToRoman(num) {
    const romanNumerals = {
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
        I: 1
    };

    let accumulator = "";

    for (const key in romanNumerals) {
        const romanNumeralsValue = romanNumerals[key];

        while (romanNumeralsValue <= num) {
            num -= romanNumeralsValue;
            accumulator += key;
        }
    }
    return accumulator;
}

convertToRoman(36);