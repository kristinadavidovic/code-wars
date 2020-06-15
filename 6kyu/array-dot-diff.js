// ? <6>kyu: Array.diff
// https://www.codewars.com/kata/523f5d21c841566fde000009

// Instructions
// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
// It should remove all values from list a, which are present in list b.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:
// arrayDiff([1,2,2,2,3],[2]) == [1,3]

// Solution
const arrayDiff = (a, b) => {
    const r = [];
    a.forEach((item) => {
        if (!b.includes(item)) r.push(item);
    });
    return r;
};

// Best Solution
function array_diff(a, b) {
    return a.filter((e) => !b.includes(e));
}

// Sample Tests
Test.describe('Sample tests', function () {
    Test.it('Should pass Sample tests', function () {
        Test.assertDeepEquals(
            arrayDiff([], [4, 5]),
            [],
            'a was [], b was [4,5]'
        );
        Test.assertDeepEquals(
            arrayDiff([3, 4], [3]),
            [4],
            'a was [3,4], b was [3]'
        );
        Test.assertDeepEquals(
            arrayDiff([1, 8, 2], []),
            [1, 8, 2],
            'a was [1,8,2], b was []'
        );
    });
});
