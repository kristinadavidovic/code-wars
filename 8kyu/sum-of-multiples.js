// ? 8kyu: Square(n) Sum
// https://www.codewars.com/kata/515e271a311df0350d00000f

// Instructions
// Your Job
// Find the sum of all multiples of n below m

// Keep in Mind
// n and m are natural numbers (positive integers)
// m is excluded from the multiples
// Examples
// sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
// sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
// sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
// sumMul(4, -7)  ==> "INVALID"

// Solution
const sumMul = (n, m) => {
    let sum = 0;
    for (let i = 0; i < m; i++) {
        if (i % n == 0) {
            sum = sum + i;
        }
    }
    return sum == 0 ? 'INVALID' : sum;
};

// Sample Tests
Test.assertEquals(sumMul(0, 0), 'INVALID');
Test.assertEquals(sumMul(2, 9), 20);
Test.assertEquals(sumMul(4, -7), 'INVALID');
