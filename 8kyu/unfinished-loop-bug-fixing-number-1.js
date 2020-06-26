// ? 8kyu: Unfinished Loop -  Bug Fixing #1
// https://www.codewars.com/kata/55c28f7304e3eaebef0000da

// Instructions
// Unfinished Loop - Bug Fixing #1
// Oh no, Timmy's created an infinite loop! Help Timmy find and fix the bug in his unfinished For Loop!

// Solution
const createArray = (number) => {
    let newArray = [];
    for (let c = 1; c <= number; c++) {
        newArray.push(c);
    }
    return newArray;
};

// Sample Tests
Test.describe('Fix Timmys Counter', function () {
    Test.it('Fixed Tests', function () {
        Test.assertSimilar(createArray(1), [1]);
        Test.assertSimilar(createArray(2), [1, 2]);
        Test.assertSimilar(createArray(3), [1, 2, 3]);
        Test.assertSimilar(createArray(4), [1, 2, 3, 4]);
        Test.assertSimilar(createArray(5), [1, 2, 3, 4, 5]);
    });
});
