// ? 8kyu: If you can't sleep, just count sheep!!
// https://www.codewars.com/kata/5b077ebdaf15be5c7f000077

// Instructions
// If you can't sleep, just count sheep!!

// Task:
// Given a non-negative integer, 3 for example, return a string with
// a murmur: "1 sheep...2 sheep...3 sheep..."
// Input will always be valid, i.e. no negative integers.

// Solution
const countSheep = (num) => {
    let sheep = [];
    for (let n = 1; n <= num; n++) {
        sheep.push(`${n} sheep...`);
    }
    return sheep.join('');
};

// Sample Tests
Test.assertEquals(countSheep(1), '1 sheep...');
Test.assertEquals(countSheep(2), '1 sheep...2 sheep...');
Test.assertEquals(countSheep(3), '1 sheep...2 sheep...3 sheep...');
