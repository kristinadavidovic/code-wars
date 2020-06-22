// ? 7kyu: Two to One
// https://www.codewars.com/kata/5656b6906de340bd1b0000ac

// Instructions
// Take 2 strings s1 and s2 including only letters from ato z.
// Return a new sorted string, the longest possible, containing distinct letters,

// each taken only once - coming from s1 or s2.
// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

// Solution
const longest = (s1, s2) => [...new Set([...s1, ...s2])].sort().join('');

// Best Solution
const longest = (s1, s2) => [...new Set(s1 + s2)].sort().join('');

// Sample Tests
Test.describe('longest', function () {
    Test.it('Basic tests', function () {
        Test.assertEquals(longest('aretheyhere', 'yestheyarehere'), 'aehrsty');
        Test.assertEquals(
            longest('loopingisfunbutdangerous', 'lessdangerousthancoding'),
            'abcdefghilnoprstu'
        );
        Test.assertEquals(
            longest('inmanylanguages', 'theresapairoffunctions'),
            'acefghilmnoprstuy'
        );
    });
});
