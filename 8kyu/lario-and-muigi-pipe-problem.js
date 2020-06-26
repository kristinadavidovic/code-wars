// ? 8kyu: Lario and Muigi Pipe Problem
// https://www.codewars.com/kata/56b29582461215098d00000f

// Instructions
// #Issue Looks like some hoodlum plumber and his brother has been
// running around and damaging your stages again.

// The pipes connecting your level's stages together need to be fixed before
// you recieve any more complaints. Each pipe should be connecting,
// since the levels ascend, you can assume every number in the sequence after the first
// index will be greater than the previous and that there will be no duplicates.

// #Task Given the a list of numbers, return the list so that the values
// increment by 1 for each index up to the maximum value.

// #Example:

// Input: 1,3,5,6,7,8

// Output: 1,2,3,4,5,6,7,8

// Solution
const pipeFix = (numbers) => {
    const min = Math.min.apply(0, numbers);
    const max = Math.max.apply(0, numbers);
    const nums = [];

    for (let g = min; g <= max; g++) {
        nums.push(g);
    }

    return nums;
};

// Best Solution
function warnTheSheep(queue) {
    const position = queue.reverse().indexOf('wolf');
    return position === 0
        ? 'Pls go away and stop eating my sheep'
        : `Oi! Sheep number ${position}! You are about to be eaten by a wolf!`;
}

// Sample Tests
Test.describe('Fixed Tests', (_) => {
    Test.it('Tests', (__) => {
        Test.assertDeepEquals(pipeFix([1, 2, 3, 5, 6, 8, 9]), [
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
        ]);
        Test.assertDeepEquals(pipeFix([1, 2, 3, 12]), [
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
        ]);
        Test.assertDeepEquals(pipeFix([6, 9]), [6, 7, 8, 9]);
        Test.assertDeepEquals(pipeFix([-1, 4]), [-1, 0, 1, 2, 3, 4]);
        Test.assertDeepEquals(pipeFix([1, 2, 3]), [1, 2, 3]);
    });
});
