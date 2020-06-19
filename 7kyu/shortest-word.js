// ? 7>kyu: Shortest Word
// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9

// Instructions
// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

// Solution
const findShort = (s) =>
    s.split(' ').sort((a, b) => a.length - b.length)[0].length;

// Best Solution
function findShort(s) {
    return Math.min.apply(
        null,
        s.split(' ').map((w) => w.length)
    );
}
// Some useful info:
// https://stackoverflow.com/questions/2870015/math-min-apply0-array-why
// TIL: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply

// Sample Tests
Test.describe('Example tests', (_) => {
    Test.assertEquals(
        findShort('bitcoin take over the world maybe who knows perhaps'),
        3
    );
    Test.assertEquals(
        findShort(
            'turns out random test cases are easier than writing out basic ones'
        ),
        3
    );
});
