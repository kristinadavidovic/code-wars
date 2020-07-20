// ? 7kyu: Find the stray number
// https://www.codewars.com/kata/57f609022f4d534f05000024

// Instructions
// You are given an odd-length array of integers, in which all of
// them are the same, except for one single number.

// Complete the method which accepts such an array, and returns
// that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

// Solution
const stray = (nums) =>
    +nums.filter((v) => nums.indexOf(v) === nums.lastIndexOf(v))[0];

// Other Solutions
// ^ is bitwise XOR and because the array is odd-length, all equal pairs cancel each other. The only number remaining is the stray number.
const stray = (nums) => nums.reduce((a, b) => a ^ b);

// Sample Tests
Test.assertEquals(stray([1, 1, 2]), 2);
