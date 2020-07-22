// ? 7kyu: Descending Order
// https://www.codewars.com/kata/5467e4d82edf8bbf40000155

// Instructions
// Your task is to make a function that can take any non-negative
// integer as a argument and return it with its digits in descending order.
// Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

// Solution
const descendingOrder = (n) =>
    +n
        .toString()
        .split('')
        .sort((a, b) => b - a)
        .join('');

// Best Solution
function descendingOrder(n) {
    return parseInt(String(n).split('').sort().reverse().join(''));
}

// Sample Tests
Test.assertEquals(descendingOrder(0), 0);
Test.assertEquals(descendingOrder(1), 1);
Test.assertEquals(descendingOrder(123456789), 987654321);
