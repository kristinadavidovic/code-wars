// ? 7kyu: Array element parity
// https://www.codewars.com/kata/5a092d9e46d843b9db000064

// Instructions
// In this Kata, you will be given an array of integers whose elements have both
// a negative and a positive value, except for one integer that is either only
// negative or only positive. Your task will be to find that integer.

// Examples:

// [1, -1, 2, -2, 3] => 3

// 3 has no matching negative appearance

// [-3, 1, 2, 3, -1, -4, -2] => -4

// -4 has no matching positive appearance

// [1, -1, 2, -2, 3, 3] => 3

// (the only-positive or only-negative integer may appear more than once)

// Good luck!

// Solution
const solve = (arr) => arr.filter((el) => !arr.includes(el - el * 2))[0];

// Best Solution
const solve = (a) => a.find((e) => !a.includes(-e));

// Sample Tests
describe('Basic tests', function () {
    Test.assertEquals(solve([1, -1, 2, -2, 3]), 3);
    Test.assertEquals(solve([-3, 1, 2, 3, -1, -4, -2]), -4);
    Test.assertEquals(solve([1, -1, 2, -2, 3, 3]), 3);
    Test.assertEquals(
        solve([-110, 110, -38, -38, -62, 62, -38, -38, -38]),
        -38
    );
    Test.assertEquals(solve([-9, -105, -9, -9, -9, -9, 105]), -9);
});
