// ? 8kyu: Double Char
// https://www.codewars.com/kata/56b1f01c247c01db92000076

// Instructions
// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// doubleChar("String") ==> "SSttrriinngg"

// doubleChar("Hello World") ==> "HHeelllloo  WWoorrlldd"

// doubleChar("1234!_ ") ==> "11223344!!__  "
// Good Luck!

// Examples
// stringToNumber("1234") == 1234
// stringToNumber("605" ) == 605
// stringToNumber("1405") == 1405
// stringToNumber("-7"  ) == -7

// Solution
const doubleChar = (str) =>
    str
        .split('')
        .map((s) => s + s)
        .join('');

// Other Solutions
function doubleChar(str) {
    return str.replace(/(.)/g, '$1$1');
}

// Sample Tests
Test.describe('doubleChar', function () {
    Test.it('works for some examples', function () {
        Test.assertEquals(doubleChar('abcd'), 'aabbccdd');
        Test.assertEquals(doubleChar('Adidas'), 'AAddiiddaass');
        Test.assertEquals(doubleChar('1337'), '11333377');
        Test.assertEquals(doubleChar('illuminati'), 'iilllluummiinnaattii');
        Test.assertEquals(doubleChar('123456'), '112233445566');
        Test.assertEquals(doubleChar('%^&*('), '%%^^&&**((');
    });
});
