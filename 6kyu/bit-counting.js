// ? 6kyu: Bit Counting
// https://www.codewars.com/kata/526571aae218b8ee490006f4

// Instructions
// Write a function that takes an integer as input, and returns the number of
// bits that are equal to one in the binary representation of that number.
// You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function
// should return 5 in this case.

// Solution
const countBits = (n) => {
    return n
        .toString(2)
        .split('')
        .reduce((acc, curr) => Number(acc) + Number(curr), 0);
};

// Best Solution
countBits = n => n.toString(2).split('0').join('').length;

// Sample Tests
Test.assertEquals(countBits(0), 0);
Test.assertEquals(countBits(4), 1);
Test.assertEquals(countBits(7), 3);
Test.assertEquals(countBits(9), 2);
Test.assertEquals(countBits(10), 2);
