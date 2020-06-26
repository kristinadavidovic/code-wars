// ? 8kyu: Convert a String to a Number!
// https://www.codewars.com/kata/544675c6f971f7399a000e79

// Instructions
// Note: This kata is inspired by Convert a Number to a String!. Try that one too.

// Description
// We need a function that can transform a string into a number.
// What ways of achieving this do you know?

// Note: Don't worry, all inputs will be strings, and every string is
// a perfectly valid representation of an integral number.

// Examples
// stringToNumber("1234") == 1234
// stringToNumber("605" ) == 605
// stringToNumber("1405") == 1405
// stringToNumber("-7"  ) == -7

// Solution
const stringToNumber = (str) => {
    return Number(str);
};

// Sample Tests
describe('stringToNumber', function () {
    it('should work for the examples', function () {
        Test.assertEquals(stringToNumber('1234'), 1234);
        Test.assertEquals(stringToNumber('605'), 605);
        Test.assertEquals(stringToNumber('1405'), 1405);
        Test.assertEquals(stringToNumber('-7'), -7);
    });
});
