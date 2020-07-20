// ? 8kyu: Array plus array
// https://www.codewars.com/kata/5a2be17aee1aaefe2a000151

// Instructions
// I'm new to coding and now I want to get the sum of two arrays...
// actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

// Solution
const arrayPlusArray = (arr1, arr2) => {
    const arr1sum = arr1.reduce((acc, curr) => acc + curr, 0);
    const arr2sum = arr2.reduce((acc, curr) => acc + curr, 0);
    return arr1sum + arr2sum;
};

const arrayPlusArray = (arr1, arr2) =>
    arr1.map((n, idx) => n + arr2[idx]).reduce((acc, curr) => acc + curr);

// Best Solution
function arrayPlusArray(arr1, arr2) {
    return arr1.concat(arr2).reduce((acc, cur) => acc + cur);
}

function arrayPlusArray(arr1, arr2) {
    let arr = [...arr1, ...arr2];
    return arr.reduce((a, b) => a + b);
}

// Sample Tests
Test.describe('Basic tests', function () {
    Test.assertEquals(arrayPlusArray([1, 2, 3], [4, 5, 6]), 21);
    Test.assertEquals(arrayPlusArray([-1, -2, -3], [-4, -5, -6]), -21);
    Test.assertEquals(arrayPlusArray([0, 0, 0], [4, 5, 6]), 15);
    Test.assertEquals(arrayPlusArray([100, 200, 300], [400, 500, 600]), 2100);
});
