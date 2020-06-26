// ? 8kyu: validate code with simple regex
// https://www.codewars.com/kata/56a25ba95df27b7743000016

// Instructions
// Basic regex tasks. Write a function that takes in a numeric code of any
// length. The function should check if the code begins with 1, 2, or 3 and
// return true if so. Return false otherwise.

// You can assume the input will always be a number.

// Solution
const validateCode = (code) => /^[123]/.test(code);

// Sample Tests
Test.describe('Basic tests', (_) => {
    Test.assertEquals(validateCode(123), true);
    Test.assertEquals(validateCode(248), true);
    Test.assertEquals(validateCode(8), false);
    Test.assertEquals(validateCode(321), true);
    Test.assertEquals(validateCode(9453), false);
});
