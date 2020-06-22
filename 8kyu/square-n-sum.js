// ? 8kyu: Square(n) Sum
// https://www.codewars.com/kata/515e271a311df0350d00000f

// Instructions
// Complete the square sum function so that it squares each number
// passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

// Solution
const squareSum = (nums) =>
    nums.reduce((acc, curr) => {
        return acc + curr ** 2;
    }, 0);

// Sample Tests
Test.assertEquals(squareSum([1, 2]), 5);
Test.assertEquals(squareSum([0, 3, 4, 5]), 50);
