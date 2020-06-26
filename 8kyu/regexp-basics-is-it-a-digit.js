// ? 8kyu: Regexp Basics - is it a digit?
// https://www.codewars.com/kata/567bf4f7ee34510f69000032

// Instructions
// Implement String#digit? (in Java StringUtils.isDigit(String)),
// which should return true if given object is a digit (0-9), false otherwise.

// Solution
String.prototype.digit = function () {
    return /^[0-9]$/.test(this);
};

// Sample Tests
describe('hex number', () => {
    it('Basic tests', () => {
        Test.assertEquals(''.digit(), false);
        Test.assertEquals('7'.digit(), true);
        Test.assertEquals(' '.digit(), false);
        Test.assertEquals('a'.digit(), false);
        Test.assertEquals('a5'.digit(), false);
        Test.assertEquals('14'.digit(), false);
    });
});
